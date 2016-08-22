const wrapMapStateToProps = (mapStateToProps, getForm) => {
  if (mapStateToProps) {
    if (typeof mapStateToProps !== 'function') {
      throw new Error('mapStateToProps must be a function');
    }
    return (state, ownProps) => ({
      ...mapStateToProps(state, ownProps),
      form: getForm(state)
    });
  }
  return state => ({
    form: getForm(state)
  });
};

export default wrapMapStateToProps;
