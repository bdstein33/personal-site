import React from 'react';
import classNames from 'classnames';
import Text from '../Text';

class TextInput extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string,
    className: React.PropTypes.string
  };

  render() {
    const {
      name,
      defaultValue,
      placeholder,
      label,
      className,
      ...otherProps
    } = this.props;

    return (
      <div>
        {label && <Text className='form-input-label'>{label}</Text>}
        <input
          type='text'
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          autoComplete='off'
          className={classNames('text-input', className)}
          {...otherProps}
        />
      </div>
    );
  }
}

export default TextInput;
