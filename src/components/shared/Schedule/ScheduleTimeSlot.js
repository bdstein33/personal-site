import React from 'react';
import classNames from 'classnames';
import {autobind} from 'core-decorators';

class ScheduleTimeSlot extends React.Component {
  static propTypes = {
    bottomBorder: React.PropTypes.bool,
    date: React.PropTypes.object,
    onClick: React.PropTypes.func
  }

  @autobind
  handleOnClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props.date);
    }
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
