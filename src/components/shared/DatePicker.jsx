import React from 'react';
import rd from 'react-dates';
import {autobind} from 'core-decorators';
import Text from './Text';

class DatePicker extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    onChange: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      date: null,
    };
  }

  @autobind
  onDatesChange({date}) {
    this.setState({date});
    if (this.props.onChange) {
      this.props.onChange({date});
    }
  }

  @autobind
  onFocusChange(focusedInput) {
    this.setState({focusedInput});
  }

  render() {
    const {focusedInput, date} = this.state;
    const {
      label,
      ...otherProps
    } = this.props;
    return (
      <div style={{margin: '10px 0'}}>
        {label && <Text className='form-input-label' style={{marginBottom: 5}}>{label}</Text>}
        <rd.SingleDatePicker
          {...otherProps}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          date={date}
          id={'single-date-picker'}
        />
      </div>
    );
  }
}

export default DatePicker;
