import React from 'react';
import ReactDOM from 'react-dom';
import OptionList from './options/index.jsx';
import Token from './token/index.jsx';
import {includes, difference, filter, noop, identity, isArray, isUndefined, isEmpty} from 'lodash';
import {contains} from 'underscore.string';
import Immutable from 'immutable';
import keyCodes from './utils/keyCodes';


function defaultValuesPropType(props, propName, component) {
  const prop = props[propName];

  if (props.simulateSelect && isArray(prop) && prop.length > 1) {
      return new Error(
        'when props.simulateSelect is set to TRUE, you should pass more than a single value in props.defaultValues'
      );
  }

  return React.PropTypes.array(props, propName, component);
}

function tresholdPropType(props, propName, component) {
  const prop = props[propName];

  if (props.simulateSelect && prop > 0) {
      return new Error(
        'when props.simulateSelect is set to TRUE, you should not pass non-zero treshold'
      );
  }

  return React.PropTypes.number(props, propName, component);
}

class TokenAutocomplete extends React.Component {

  static displayName = 'TokenAutocomplete';

  static propTypes = {
    //initial state
    options: React.PropTypes.array,
    placeholder: React.PropTypes.string,
    treshold: tresholdPropType,
    defaultValues: defaultValuesPropType,
    processing: React.PropTypes.bool,
    focus: React.PropTypes.bool,
    //behaviour
    filterOptions: React.PropTypes.bool,
    simulateSelect: React.PropTypes.bool,
    limitToOptions: React.PropTypes.bool,
    parseOption: React.PropTypes.func,
    parseToken: React.PropTypes.func,
    parseCustom: React.PropTypes.func,
    //handles
    onInputChange: React.PropTypes.func,
    onChange: React.PropTypes.func
  }

  static defaultProps = {
    //initial state
    options: [],
    defaultValues: [],
    placeholder: 'add new tag',
    treshold: 0,
    focus: false,
    processing: false,
    //behaviour
    filterOptions: true,
    simulateSelect: false,
    limitToOptions: false,
    parseOption: identity,
    parseToken: identity,
    parseCustom: identity,
    //handles
    onInputChange: noop,
    onChange: noop
  }

  state = {
    focused: false,
    inputValue: '',
    values: Immutable.List([])
  }


  //LIFECYCLE

  componentDidMount() {
    let values = Immutable.List(this.props.defaultValues);
    this.setState({values});

    if (!isUndefined(this.props.focus)) {
      this.setState({focused: this.props.focus});
    }

    if (this.props.focus) {
      this.bindListeners();
    }

    if (window) {
      window.addEventListener('click', this.handleClick);
    }

  }
  componentWillReceiveProps(nextProps) {
    let values = Immutable.List(nextProps.defaultValues);
    this.setState({values});
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('click', this.handleClick);
    }
  }

  bindListeners() {
    if (!this.keyDownListener) {
      this.keyDownListener = window.addEventListener('keydown', this.onKeyDown);
    }
  }

  unbindListeners() {
    window.removeEventListener('keydown', this.onKeyDown);
    delete this.keyDownListener;
  }

  //EVENT HANDLERS

  onInputChange = e => {
    this.props.onInputChange(e.target.value);
    this.setState({
      inputValue: e.target.value
    });

  }

  onKeyDown = e => {

    switch (e.keyCode) {
      case keyCodes.ESC:
        this.blur();
        break;
      case keyCodes.ENTER:
        this.addSelectedValue(e);
        break;
      case keyCodes.BACKSPACE:
        if (!this.state.inputValue.length) {
          this.setState({
            inputValue: this.state.inputValue.slice(0, -1)
          });
          this.deleteValue(this.state.values.size - 1);
          e.preventDefault();

        }
        break;
    }
  }

  handleClick = e => {
    const clickedOutside = !ReactDOM.findDOMNode(this).contains(e.target);
     if (clickedOutside && this.state.focused) {
        this.blur();
     }

     if (!clickedOutside && !this.state.focused) {
       this.focus();
     }
   }

  //ACTIONS

  focus = () => {
    if (this.refs.input) {
      ReactDOM.findDOMNode(this.refs.input).focus();
    }
    this.bindListeners();
    this.setState({focused: true});
  }

  blur = () => {
    if (this.refs.input) {
      ReactDOM.findDOMNode(this.refs.input).blur();
    }

    this.unbindListeners();
    this.setState({focused: false});
  }

  deleteValue = (index) => {

    const valueRemoved = this.state.values.get(index);
    const values = this.state.values.delete(index);
    this.props.onChange({target:{name:this.props.name, value:values.toArray()}}, values, valueRemoved);

    // this.setState({values});
    this.focus();
  }

  addSelectedValue = () => {
    const areOptionsAvailable = this.getAvailableOptions().length;
    const newValue = areOptionsAvailable ? this.refs.options.getSelected() : void 0;
    const isAlreadySelected = includes(this.state.values.toArray(), newValue);
    const shouldAddValue = !!newValue && !isAlreadySelected;

    if (shouldAddValue) {

      let values = this.props.simulateSelect
        ? Immutable.List([newValue])
        : this.state.values.push(newValue);

      this.props.onChange({target:{name:this.props.name, value:values.toArray()}}, values, newValue);
      this.setState({
        // values,
        inputValue: ''
      });

    }

    if (this.props.simulateSelect) {
      this.blur();
    } else {
      this.focus();
    }

  }

  //HELPERS

  getAvailableOptions = () => {

    let availableOptions = [];

    if (this.isTresholdReached()) {
      //notselected if not simulating select
      if (this.props.simulateSelect) {
        availableOptions = this.props.options;
      } else {
        availableOptions = difference(this.props.options, this.state.values.toArray());
      }

      //filter
      availableOptions = filter(availableOptions, option => {
        return contains(option, this.state.inputValue);
      });

    }

    if (this.shouldAllowCustomValue() &&
        !isEmpty(this.state.inputValue) &&
        !includes(availableOptions, this.state.inputValue)) {
      availableOptions.unshift(this.props.parseCustom(this.state.inputValue));
    }

    return availableOptions;

  }

  shouldAllowCustomValue = () => {
    return !this.props.limitToOptions && !this.props.simulateSelect;
  }

  shouldShowOptions = () => {
    return this.isTresholdReached() && this.state.focused;
  }

  shouldShowInput = () => {
    return this.props.filterOptions && (!this.props.simulateSelect || !this.state.values.size);
  }

  shouldShowFakePlaceholder = () => {
    return !this.shouldShowInput() && !this.state.values.size;
  }

  isTresholdReached = () => {
    return this.state.inputValue.length >= this.props.treshold;
  }

  //RENDERERS

  renderOptionsDropdown = () => {
    if (this.shouldShowOptions()) {
      let passProps = {
          options: this.getAvailableOptions(),
          term: this.state.inputValue,
          handleAddSelected: this.addSelectedValue,
          parseOption: this.props.parseOption
      };
      return <OptionList ref="options" {...passProps}/>;
    } else {
      return null;
    }

  }

  renderTokens = () => {
    return this.state.values.map((value, key) => {
      return (
        <Token
          key={key}
          ref={'token' + key}
          index={key}
          value={value}
          fullWidth={this.props.simulateSelect}
          parse={this.props.parseToken}
          handleRemove={this.deleteValue}/>
      );
    });
  }

  renderProcessing = () => {
    return this.props.processing ? <div ref="processing" className="reactSelect__processing" /> : null;
  }

  renderFakePlaceholder = () => {
    return this.shouldShowFakePlaceholder()
      ? (<div
            ref="fakePlaceholder"
            className="reactSelect__fakePlaceholder" >
            {this.props.placeholder}
         </div>)
      : null;
  }

  renderInput = () => {
    return this.shouldShowInput()
      ? (<input
          onFocus={this.focus}
          onChange={this.onInputChange}
          value={this.state.inputValue}
          placeholder={this.props.placeholder}
          className="reactSelect__input"
          ref="input"/>)
      : this.renderFakePlaceholder();
  }

  renderDropdownIndicator = () => {
    return this.props.simulateSelect
      ? <div ref="dropdownIndicator" className="reactSelect__dropdownIndicator" />
      : null;
  }

  render() {
    return (
      <div ref="wrapper" className="reactSelect__wrapper" >
        {this.renderTokens()}
        <div ref="inputWrapper" className="reactSelect__inputWrapper" onClick={this.focus} >
          {this.renderInput()}
          {this.renderProcessing()}
          {this.renderDropdownIndicator()}
        </div>
        {this.renderOptionsDropdown()}
      </div>
    );
  }
}




export default TokenAutocomplete;