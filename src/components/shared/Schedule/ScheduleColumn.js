import React from 'react';
// import moment from 'moment';

// import Text from '../Text';
import ScheduleTimeBox from './ScheduleTimeBox';

class ScheduleColumn extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
    date: React.PropTypes.string
  }

  renderTimePeriods() {
    return Array.from({length: 24}, (x, hour) => {
      return (
        <ScheduleTimeBox
          date={this.props.date}
          hour={hour}
          key={`time-box-${this.props.date}-${hour}`}
        />
      );
    });
  }

  render() {
    this.renderTimePeriods();
    return (
      <div className='schedule__column'>
        {this.renderTimePeriods()}
      </div>
    );
  }
}

export default ScheduleColumn;
