import React from 'react';
import classNames from 'classnames';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';
import {modalActions} from '../../../actions';

import moment from 'moment';
import FlexBox from '../FlexBox';
import Text from '../Text';
import EditEventModal from './EditEventModal';
import ScheduleTimeSlot from './ScheduleTimeSlot';

class ScheduleEvent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    bottomBorder: React.PropTypes.bool,
    data: React.PropTypes.object,
    timeSlots: React.PropTypes.number,
    onMouseDownTimeSlot: React.PropTypes.func,
    onMouseUpTimeSlot: React.PropTypes.func,
    onMouseEnterTimeSlot: React.PropTypes.func
  }

  @autobind
  handleOnClick() {
    this.props.actions.showModal(<EditEventModal />, 'Edit');
  }

  renderDragHandlers() {
    const output = [];
    const date = moment(this.props.data.startDate);
    const endDate = moment(this.props.data.endDate);

    while (date.isBefore(endDate)) {
      output.push(
        <ScheduleTimeSlot
          date={date.toDate()}
          data={this.props.data}
          key={`time-slot-${date}`}
          onMouseDown={this.props.onMouseDownTimeSlot}
          onMouseUp={this.props.onMouseUpTimeSlot}
          onMouseEnter={this.props.onMouseEnterTimeSlot}
        />
      );

      date.add(15, 'minutes');
    }

    return output;
  }

  formatName() {
    if (this.props.timeSlots === 1) {
      return `${this.props.data.name.slice(0, 12)}...`;
    }
    return this.props.data.name;
  }


  render() {
    const {
      bottomBorder,
      timeSlots
    } = this.props;
    return (
      <div
        className={classNames(
          'schedule__event',
          `schedule__event-height-${timeSlots}`,
          bottomBorder && 'schedule__border-bottom'
        )}
        // onClick={this.handleOnClick}
      >
        <FlexBox
          flexDirection='column'
          justifyContent='center'
          className='event-container'
        >
          <Text
            fontSize={timeSlots === 1 ? 1 : 2}
            bold={true}
            className='schedule__event-label'
            style={{
              lineHeight: timeSlots === 1 ? 10 : null
            }}
          >
            {this.formatName()}
          </Text>
        </FlexBox>
        <FlexBox
          flexDirection='column'
          className='event-container'
          // onDragStart={this.handleDragStart}
          // onDragEnd={this.handleDragEnd}
          // draggable={true}
        >

          {this.renderDragHandlers()}
        </FlexBox>
      </div>
    );
  }
}

export default storeConnect(['application'], modalActions)(ScheduleEvent);
