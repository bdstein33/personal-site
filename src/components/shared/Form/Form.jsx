import React from 'react';
import {autobind} from 'core-decorators';
import serialize from 'form-serialize';

class Form extends React.Component {
  static propTypes = {
    onSubmit: React.PropTypes.func,
    children: React.PropTypes.node
  };

  @autobind
  submitForm(e) {
    e.preventDefault();
    const formData = serialize(e.target, {hash: true});
    this.props.onSubmit(formData);
  }

  render() {
    const {
      onSubmit,
      children,
      ...otherProps
    } = this.props;
    return (
      <form
        onSubmit={this.submitForm}
        {...otherProps}
      >
        {children}
      </form>
    );
  }
}

export default Form;
