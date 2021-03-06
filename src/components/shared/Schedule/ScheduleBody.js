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
    minDate: React.PropTypes.object,
    maxDate: React.PropTypes.object,
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
  saveActiveEvent() {
    const {activeEvent} = this.state;
    if (activeEvent) {
      this.props.actions.updateItineraryEvent({
        itineraryId: activeEvent.itineraryId,
        id: activeEvent.id,
        startDate: activeEvent.startDate,
        endDate: activeEvent.endDate
      });

      // Then remove active event from state
      this.setState({
        activeEvent: null,
        grabTime: null
      });
    }
  }

  @autobind
  updateEventDateRange(toTime) {
    const {minDate, maxDate} = this.props;
    const {activeEvent} = this.state;

    const diff = moment.duration(moment(toTime).diff(moment(this.state.grabTime))).asMinutes();

    const newStartDate = moment(activeEvent.startDate).add(diff, 'minutes');
    const newEndDate = moment(activeEvent.endDate).add(diff, 'minutes');

    // If adjusted time period for event is within the itinerary's date range, move it
    if (!newStartDate.isBefore(minDate) && !newEndDate.isAfter(maxDate)) {
      activeEvent.startDate = newStartDate.toDate();
      activeEvent.endDate = newEndDate.toDate();
      this.props.actions.dragScheduleEvent(this.state.activeEvent.id, diff);

      this.setState({
        grabTime: moment(this.state.grabTime).add(diff, 'minutes'),
        activeEvent
      });
    }
  }

  renderBodyColumns() {
    return Object.keys(this.props.data).map(date => {
      return (
        <ScheduleColumn
          data={this.props.data[date]}
          date={date}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
          key={`schedule-column-${date}`}
          onClickEvent={this.props.onClickEvent}
          onClickTimeSlot={this.props.onClickTimeSlot}
          onMouseDownTimeSlot={this.setActiveEvent}
          onMouseUpTimeSlot={this.saveActiveEvent}
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
