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


  render() {
    return (
      <FlexBox
        className='schedule'
        flexDirection='column'
      >
        <ScheduleHeader dates={Object.keys(this.props.data)}/>
        <ScheduleBody
          data={this.props.data}
          onClickTimeSlot={this.props.onClickTimeSlot}
        />
      </FlexBox>
    );
  }
}

export default Schedule;
