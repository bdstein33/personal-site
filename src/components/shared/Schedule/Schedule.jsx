import React from 'react';

import ScheduleBody from './ScheduleBody';
import ScheduleHeader from './ScheduleHeader';
import FlexBox from '../FlexBox';

class Schedule extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
    onClickEvent: React.PropTypes.func,
    onClickTimeSlot: React.PropTypes.func
  }

  static defaultProps = {
    data: {
      '2016-10-01': [
        {startDate: '2016-10-01 05:00:00', endDate: '2016-10-01 10:00:00', name: 'Test Event 1'},
        {startDate: '2016-10-01 11:00:00', endDate: '2016-10-01 13:00:00', name: 'Test Event 2'}
      ],
      '2016-10-02': [
        {startDate: '2016-10-02 04:00:00', endDate: '2016-10-02 04:15:00', name: 'Test Event 3'},
        {startDate: '2016-10-02 09:00:00', endDate: '2016-10-02 10:30:00', name: 'Test Event 4'}
      ],
      '2016-10-03': [],
      '2016-10-04': [],
      '2016-10-05': [],
      '2016-10-06': [],
      '2016-10-07': [],
    }
  }

  render() {
    return (
      <FlexBox
        className='schedule'
        flexDirection='column'
      >
        <ScheduleHeader dates={Object.keys(this.props.data)}/>
        <ScheduleBody
          data={this.props.data}
          onClickEvent={this.props.onClickEvent}
          onClickTimeSlot={this.props.onClickTimeSlot}
        />
      </FlexBox>
    );
  }
}

export default Schedule;
