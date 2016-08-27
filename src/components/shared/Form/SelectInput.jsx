import React from 'react';
import classNames from 'classnames';
import Text from '../Text';

class SelectInput extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    label: React.PropTypes.string,
    className: React.PropTypes.string,
    options: React.PropTypes.array,
    allowBlank: React.PropTypes.bool
  };

  render() {
    const {
      name,
      defaultValue,
      label,
      className,
      options,
      allowBlank,
      ...otherProps
    } = this.props;

    if (allowBlank) {
      options.unshift({value: ''});
    }
    return (
      <div>
        {label && <Text className='form-input-label'>{label}</Text>}
        <select
          name={name}
          defaultValue={defaultValue}
          className={classNames('select-input', className)}
          {...otherProps}
        >
          {options.map((option, i) => {
            return (
              <option
                label={option.label || option.value}
                value={option.value || null}
                disabled={!!option.disabled}
                key={`select-${option.value}-${i}`}
              />
            );
          })}
        </select>
      </div>
    );
  }
}

export default SelectInput;
