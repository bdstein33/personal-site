import React from 'react';
import RichTextEditor from 'react-rte';

class TextEditor extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string
  };

  static defaultProps = {
    defaultValue: ''
  }

  state = {
    // value: RichTextEditor.createEmptyValue()
    value: RichTextEditor.createValueFromString(this.props.defaultValue, 'html')
  }

  onChange = (value) => {
    // console.log(value.toString('html'));
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(value);
    }
  };

  render () {
    return (
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
        className='text-editor'
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default TextEditor;
