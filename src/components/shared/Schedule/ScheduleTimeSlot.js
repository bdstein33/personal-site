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
  handleMouseDown() {
    console.log(this.props.date);
  }

  @autobind
  handleMouseUp() {
    console.log('MOUSE UP');
  }

  @autobind
  handleOnClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props.date);
    }
  }

  handleOnDrop(e) {
    console.log(e.target);
    console.log('DROP RECEIVED');
  }

  handleOnDragOver(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div
        className={classNames(
          'schedule__time_slot',
          this.props.bottomBorder && 'schedule__border-bottom'
        )}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onDrop={this.handleOnDrop}
        onDragOver={this.handleOnDragOver}
      >
      </div>
    );
  }
}

export default ScheduleTimeSlot;
