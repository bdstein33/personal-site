import React from 'react';
import classNames from 'classnames';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';
import {modalActions} from '../../../actions';

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
    console.log(e.target);
    console.log('DROPPED!');
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
      </div>
    );
  }
}

export default storeConnect(['application'], modalActions)(ScheduleEvent);
