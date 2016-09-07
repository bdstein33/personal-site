import React from 'react';
import classNames from 'classnames';
import {autobind} from 'core-decorators';

import Text from '../Text';

class ScheduleEvent extends React.Component {
  static propTypes = {
    bottomBorder: React.PropTypes.bool,
    data: React.PropTypes.object,
    onClick: React.PropTypes.func,
    timeSlots: React.PropTypes.number
  }

  @autobind
  handleOnClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props.data);
    }
  }


  render() {
    const {
      bottomBorder,
      data,
      timeSlots
    } = this.props;

    return (
      <div
        className={classNames(
          'schedule__event',
          `schedule__event-height-${timeSlots}`,
          bottomBorder && 'schedule__border-bottom'
        )}
        onClick={this.handleOnClick}
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
