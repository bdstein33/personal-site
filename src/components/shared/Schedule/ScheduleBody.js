import React from 'react';
import {autobind} from 'core-decorators';
import moment from 'moment';

import storeConnect from '../../addons/storeConnect';
import {itineraryActions} from '../../../actions';

import FlexBox from '../FlexBox';
import ScheduleColumn from './ScheduleColumn';
import ScheduleLeftColumn from './ScheduleLeftColumn';

class ScheduleBody extends React.Component {
  static propTypes = {
    // From storeConnect
    actions: React.PropTypes.object.isRequired,

    data: React.PropTypes.object,
    onClickEvent: React.PropTypes.func,
    onClickTimeSlot: React.PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      activeEvent: null,
      grabTime: null
    };
  }

  @autobind
  setActiveEvent(activeEvent, grabTime) {
    this.setState({activeEvent, grabTime});
  }

  @autobind
  removeActiveEvent() {
    this.setState({
      activeEvent: null,
      grabTime: null
    });
  }

  @autobind
  updateEventDateRange(toTime) {
    const diff = moment.duration(moment(toTime).diff(moment(this.state.grabTime))).asMinutes();
    this.props.actions.updateEventDate(this.state.activeEvent.id, diff);
    this.setState({
      grabTime: moment(this.state.grabTime).add(diff, 'minutes')
    });
  }

  renderBodyColumns() {
    return Object.keys(this.props.data).map(date => {
      return (
        <ScheduleColumn
          data={this.props.data[date]}
          date={date}
          key={`schedule-column-${date}`}
          onClickEvent={this.props.onClickEvent}
          onClickTimeSlot={this.props.onClickTimeSlot}
          onMouseDownTimeSlot={this.setActiveEvent}
          onMouseUpTimeSlot={this.removeActiveEvent}
          onMouseEnterTimeSlot={this.updateEventDateRange}
        />
      );
    });
  }

  renderLeftColumn() {
    return (
      <ScheduleLeftColumn/>
    );
  }

  render() {
    return (
      <FlexBox className='schedule__body'>
        {this.renderLeftColumn()}
        {this.renderBodyColumns()}
      </FlexBox>
    );
  }
}

export default storeConnect(null, itineraryActions)(ScheduleBody);
