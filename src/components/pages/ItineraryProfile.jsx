import React from 'react';
import moment from 'moment';

import storeConnect from '../addons/storeConnect';

import * as C from '../shared';

class ItineraryProfile extends React.Component {
  static propTypes = {
    itinerary: React.PropTypes.object
  }

  render() {
    const {itinerary} = this.props;
    const startDate = moment(itinerary.startDate).format('MMMM DD, YYYY');
    const endDate = moment(itinerary.endDate).format('MMMM DD, YYYY');
    return (
      <C.FlexBox
        flexDirection='column'
        style={{width: '100%', height: '100%'}}
        className='page-container'
      >
        <C.Container isFullWidth={true}>
          <C.Row>
            <C.Text fontSize={4} className='page-header'>{itinerary.name} ({startDate} to {endDate})</C.Text>
            <C.Text fontSize={4} className='page-header'>{itinerary.startAt}</C.Text>
          </C.Row>
        </C.Container>

        <C.Schedule
          data={itinerary}
        />
      </C.FlexBox>
    );
  }
}

export default storeConnect([{itinerary: 'itinerary.itineraryProfile'}])(ItineraryProfile);
