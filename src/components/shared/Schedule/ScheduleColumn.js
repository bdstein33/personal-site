import React from 'react';
import moment from 'moment';

import ScheduleEvent from './ScheduleEvent';
import ScheduleTimeSlot from './ScheduleTimeSlot';

class ScheduleColumn extends React.Component {
  static propTypes = {
    data: React.PropTypes.array,
    date: React.PropTypes.string,
    onClickEvent: React.PropTypes.func,
    onClickTimeSlot: React.PropTypes.func

  }

  renderTimeSlots() {
    const data = [...this.props.data];
    const output = [];
    const date = moment(this.props.date).hour(0);
    const maxDate = moment(this.props.date).add(1, 'days');
    let nextEvent = data.shift();

    // If an event started on the previous day, display the name on the previous day
    if (nextEvent && moment(nextEvent.startDate).isBefore(date)) {
      nextEvent.startDate = date.toDate();
      nextEvent.name = '';
    }

    while (date.isBefore(maxDate)) {
      if (nextEvent && moment(nextEvent.startDate).isSame(date)) {
        // If an event ends on the next day, adjust it's height on the current day
        if (moment(nextEvent.endDate).isAfter(maxDate)) {
          nextEvent.endDate = maxDate.toDate();
        }
        const duration = moment.duration(moment(nextEvent.endDate).diff(moment(nextEvent.startDate))).asMinutes();
        output.push(
          <ScheduleEvent
            data={nextEvent}
            timeSlots={duration / 15}
            bottomBorder={moment(nextEvent.endDate).get('minute') === 0}
            onClick={this.props.onClickEvent}
            key={`event-${date}`}
          />
        );
        nextEvent = data.shift();
        date.add(duration, 'minutes');
      } else {
        output.push(
          <ScheduleTimeSlot
            date={date.toDate()}
            bottomBorder={date.get('minute') === 45}
            onClick={this.props.onClickTimeSlot}
            key={`time-slot-${date}`}
          />
        );
        date.add(15, 'minutes');
      }
    }

    return output;
  }

  render() {
    return (
      <div className='schedule__column'>
        {this.renderTimeSlots()}
      </div>
    );
  }
}

export default ScheduleColumn;
