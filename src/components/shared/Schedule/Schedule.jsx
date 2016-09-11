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
    const {data} = this.props;
    return (
      <FlexBox
        className='schedule'
        flexDirection='column'
      >
        <ScheduleHeader dates={Object.keys(data.schedule)}/>
        <ScheduleBody
          data={data.schedule}
          minDate={data.startDate}
          maxDate={data.endDate}
          onClickTimeSlot={this.props.onClickTimeSlot}
        />
      </FlexBox>
    );
  }
}

export default Schedule;
