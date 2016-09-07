import React from 'react';
import classNames from 'classnames';

class ScheduleTimeSlot extends React.Component {
  static propTypes = {
    bottomBorder: React.PropTypes.bool
  }

  render() {
    return (
      <div
        className={classNames(
          'schedule__time_slot',
          this.props.bottomBorder && 'schedule__border-bottom'
        )}
      >
      </div>
    );
  }
}

export default ScheduleTimeSlot;
