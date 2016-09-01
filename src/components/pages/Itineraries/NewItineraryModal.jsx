import React from 'react';
import {autobind} from 'core-decorators';

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
    return this.props.actions.createItinerary({...data, userId: this.props.user.id});
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
            <C.DateRange
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
            rows={8}
          />
          <C.Submit value='CREATE' />
        </C.Form>
      </div>
    );
  }
}

export default storeConnect([{user: 'application.user'}], itineraryActions)(NewItineraryModal);
