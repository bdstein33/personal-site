import React from 'react';
import rd from 'react-dates';
import {autobind} from 'core-decorators';
import Text from './Text';

class DateRangePicker extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    onChange: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null
    };
  }

  @autobind
  onDatesChange({startDate, endDate}) {
    this.setState({startDate, endDate});
    if (this.props.onChange) {
      this.props.onChange({startDate, endDate});
    }
  }

  @autobind
  onFocusChange(focusedInput) {
    this.setState({focusedInput});
  }

  render() {
    const {focusedInput, startDate, endDate} = this.state;
    const {
      label,
      ...otherProps
    } = this.props;
    return (
      <div style={{margin: '10px 0'}}>
        {label && <Text className='form-input-label' style={{marginBottom: 5}}>{label}</Text>}
        <rd.DateRangePicker
          {...otherProps}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    );
  }
}

export default DateRangePicker;
