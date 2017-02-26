import React from 'react';
import {autobind} from 'core-decorators';
import moment from 'moment';

import storeConnect from '../../addons/storeConnect';
import {itineraryActions} from '../../../actions';

import * as C from '../../shared';

class NewItineraryModal extends React.Component {
  static propTypes = {
    onCompleteFunc: React.PropTypes.func,
    // From storeConnect
    actions: React.PropTypes.object,
    user: React.PropTypes.object
  }

  @autobind
  createItinerary(data) {
    const output = {...data};
    output.startDate = new Date(moment(output.startDate).format('YYYY-MM-DD HH:mm:ss'));
    output.endDate = new Date(
      moment(output.endDate)
      .add('hours', 23)
      .add('minutes', 59)
      .add('second', 59)
      .format('YYYY-MM-DD HH:mm:ss')
    );

    return this.props.actions.createItinerary({...output, userId: this.props.user.id});
  }

  render() {
    return (
      <div className='content-container' style={{width: 618}}>
        <C.Form onSubmit={this.createItinerary}>
          <C.TextInput
            name='name'
            placeholder='Name'
            label='Itinerary Name'
            autoComplete='off'
            autoFocus={true}
          />
          <div style={{float: 'left'}}>
            <C.DateRangePicker
              label='Itinerary Dates'
              onChange={this.onDateChange}
            />
          </div>
          <C.TextInput
            label='Status'
            name='status'
            placeholder='Status'
            autoComplete='off'
          />
          <C.TextArea
            label='Notes'
            name='note'
            placeholder='Notes'
            rows={20}
          />
          <C.Submit value='CREATE' />
        </C.Form>
      </div>
    );
  }
}

export default storeConnect([{user: 'application.user'}], itineraryActions)(NewItineraryModal);
