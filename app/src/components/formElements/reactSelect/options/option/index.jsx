import React from 'react';
import {noop, identity} from 'lodash';

export default class Option extends React.Component {

  static displayName = 'Option';

  static propTypes = {
    selected: React.PropTypes.bool,
    index: React.PropTypes.number,
    handleSelect: React.PropTypes.func,
    handleClick: React.PropTypes.func,
    parse: React.PropTypes.func
  }

  static defaultProps = {
    handleSelect: noop,
    handleClick: noop,
    selected: false,
    index: 0,
    parse: identity
  }

  onMouseEnter = () => {
    this.props.handleSelect(this.props.index);
  }

  onClick = () => {
    this.props.handleClick(this.props.value);
  }

  render() {
    let className = `reactSelect__options__option__wrapper ${this.props.selected? 'reactSelect__options__option__selected' : ''}`;
    return (
      <div
        ref="wrapper"
        className={ className }
        onClick={this.onClick}
        onMouseEnter={this.onMouseEnter} >
          {this.props.parse(this.props.value)}
      </div>
    );
  }
}
