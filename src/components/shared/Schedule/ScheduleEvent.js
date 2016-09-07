import React from 'react';
import classNames from 'classnames';
import Text from '../Text';

class ScheduleEvent extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
    timeSlots: React.PropTypes.number,
    bottomBorder: React.PropTypes.bool
  }


  render() {
    const {
      data,
      timeSlots,
      bottomBorder
    } = this.props;

    return (
      <div
        className={classNames(
          'schedule__event',
          `schedule__event-height-${timeSlots}`,
          bottomBorder && 'schedule__border-bottom'
        )}
      >
        <Text
          fontSize={1}
          bold={true}
          className='schedule__event-label'
        >
          {data.name}
        </Text>
      </div>
    );
  }
}

export default ScheduleEvent;
