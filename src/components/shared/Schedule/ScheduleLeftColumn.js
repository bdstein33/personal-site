import React from 'react';
import moment from 'moment';

import Text from '../Text';

class ScheduleLeftColumn extends React.Component {
  renderTimePeriods() {
    return Array.from({length: 24}, (x, hour) => {
      return (
        <div className='schedule__left-column-label-container schedule__border-bottom'
          key={`left-col-time-${hour}`}
        >
          <Text
            fontSize={2}
            bold={true}
            className='schedule__left-column-label text-center'
          >
            {moment().hour(hour).format('ha')}
          </Text>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='schedule__left-column'>
        {this.renderTimePeriods()}
      </div>
    );
  }
}

export default ScheduleLeftColumn;
