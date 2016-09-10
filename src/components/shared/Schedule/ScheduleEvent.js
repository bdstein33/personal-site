import React from 'react';
import classNames from 'classnames';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';
import {modalActions} from '../../../actions';

import moment from 'moment';
import FlexBox from '../FlexBox';
import Text from '../Text';
import EditEventModal from './EditEventModal';

class ScheduleEvent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    bottomBorder: React.PropTypes.bool,
    data: React.PropTypes.object,
    // onClick: React.PropTypes.func,
    timeSlots: React.PropTypes.number
  }

  @autobind
  handleOnClick() {
    this.props.actions.showModal(<EditEventModal />, 'Edit');
  }

  handleDragEnd(e) {
    // console.log(e.target);
    console.log('END');
  }

  handleDragStart(e) {
    console.log('START');
  }

  // test() {
  //   console.log('AAAA')
  // }

  renderDragHandlers() {
    const startDate = moment(data.startDate);
    const endDate = moment(date.endDate);

      // while (date.isBefore(maxDate)) {
  }


  render() {
    const {
      bottomBorder,
      data,
      timeSlots
    } = this.props;
    return (
      <FlexBox
        flexDirection='column'
        justifyContent='center'
        className={classNames(
          'schedule__event',
          `schedule__event-height-${timeSlots}`,
          bottomBorder && 'schedule__border-bottom'
        )}
        onClick={this.handleOnClick}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        draggable={true}
      >
        <Text
          fontSize={1}
          bold={true}
          className='schedule__event-label'
        >
          {data.name}
        </Text>

      </FlexBox>
    );
  }
}

export default storeConnect(['application'], modalActions)(ScheduleEvent);
