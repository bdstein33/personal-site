import React from 'react';
import classNames from 'classnames';
import Text from '../Text';

class TextArea extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string,
    className: React.PropTypes.string,
    type: React.PropTypes.string
  };

  static defaultProps = {
    type: 'text'
  }

  render() {
    const {
      name,
      defaultValue,
      placeholder,
      label,
      className,
      type,
      ...otherProps
    } = this.props;

    return (
      <div>
        {label && <Text className='form-input-label'>{label}</Text>}
        <textarea
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          autoComplete='off'
          className={classNames('text-area', className)}
          {...otherProps}
        />
      </div>
    );
  }
}

export default TextArea;
