import React from 'react';
import moment from 'moment';

import ScheduleEvent from './ScheduleEvent';
import ScheduleTimeSlot from './ScheduleTimeSlot';

class ScheduleColumn extends React.Component {
  static propTypes = {
    data: React.PropTypes.array,
    date: React.PropTypes.string
  }

  renderTimeSlots() {
    const data = [...this.props.data];
    const output = [];
    const date = moment(this.props.date).hour(0);
    let nextEvent = data.shift();

    while (date.isBefore(moment(this.props.date).add(1, 'days'))) {
      if (nextEvent && moment(nextEvent.startDate).isSame(date)) {
        const duration = moment.duration(moment(nextEvent.endDate).diff(moment(nextEvent.startDate))).asMinutes();
        output.push(
          <ScheduleEvent
            data={nextEvent}
            timeSlots={duration / 15}
            bottomBorder={moment(nextEvent.endDate).get('minute') === 0}
            key={`event-${date}`}
          />
        );
        nextEvent = data.shift();
        date.add(duration, 'minutes');
      } else {
        output.push(
          <ScheduleTimeSlot
            date={date}
            bottomBorder={date.get('minute') === 45}
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
