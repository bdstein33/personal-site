import React from 'react';

import storeConnect from '../addons/storeConnect';
import * as C from '../shared';

import RichTextEditor from 'react-rte';

class Editor extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func
  };

  state = {
    value: RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    // console.log(value.toString('html'));
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render () {
    return (
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}

class Test extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    return (
      <C.Container>
        <C.Icon name='backup'/>
      <i className="material-icons">face</i>
      </C.Container>
    );
  }
}

export default storeConnect(['application'])(Test);
