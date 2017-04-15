import React from 'react';
import moment from 'moment';

import ScheduleBody from './ScheduleBody';
import ScheduleHeader from './ScheduleHeader';
import FlexBox from '../FlexBox';

/**
 * Drag and drop schedule component used to visualize and edit itineraries
 * @param {object} data - Itinerary meta data and all schedule events
 * @param {integer} data.id - Unique identifer of the itinerary
 * @param {string} data.name - Name of the schedule
 * @param {date} data.startDate - First day the itinerary
 * @param {date} data.endDate - Last day the itinerary
 * @param {array} events - List of itinerary events
 * @param {object} schedule - Itinerary event data formatted for use by schedule
 */
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
          minDate={moment(data.startDate)}
          maxDate={moment(data.endDate)}
          onClickTimeSlot={this.props.onClickTimeSlot}
        />
      </FlexBox>
    );
  }
}

export default Schedule;
