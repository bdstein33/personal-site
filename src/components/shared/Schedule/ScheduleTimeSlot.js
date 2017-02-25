import React from 'react';
import classNames from 'classnames';
import {autobind} from 'core-decorators';

class ScheduleTimeSlot extends React.Component {
  static propTypes = {
    bottomBorder: React.PropTypes.bool,
    date: React.PropTypes.object,
    data: React.PropTypes.object,
    isOutOfRange: React.PropTypes.bool,
    onMouseDown: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
    onMouseEnter: React.PropTypes.func
  }

  @autobind
  handleMouseDown() {
    if (this.props.data) {
      this.props.onMouseDown(this.props.data, this.props.date);
    }
  }

  @autobind
  handleMouseUp() {
    this.props.onMouseUp();
  }

  @autobind
  handleMouseEnter(e) {
    if (e.buttons === 1) {
      this.props.onMouseEnter(this.props.date);
    }
  }

  render() {
    return (
      <div
        className={classNames(
          'schedule__time_slot',
          this.props.isOutOfRange && 'schedule__out_of_range',
          this.props.bottomBorder && 'schedule__border-bottom'
        )}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseEnter={this.handleMouseEnter}
      >
      </div>
    );
  }
}

export default ScheduleTimeSlot;
