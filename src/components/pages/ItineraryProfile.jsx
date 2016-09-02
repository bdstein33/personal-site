import React from 'react';

import storeConnect from '../addons/storeConnect';

import Schedule from './ItineraryProfile/Schedule';
import * as C from '../shared';

class ItineraryProfile extends React.Component {
  static propTypes = {
    itinerary: React.PropTypes.object
  }

  render() {
    const {itinerary} = this.props;
    console.log(itinerary);

    return (
      <C.Container
        isFullWidth={true}
        padding={false}
      >
        <C.Container isFullWidth={true}>
          <C.Row>
            <C.Text fontSize={4}>{itinerary.name}</C.Text>
            <C.DatePicker />
          </C.Row>
        </C.Container>
        <p>hello</p>
        <C.FlexBox
          flexDirection={'row'}
          style={{width: '100%', height: 50, backgroundColor: 'yellow'}}
          justifyContent={'flex-start'}
        >
          <div style={{width: 50, height: 50, backgroundColor: 'red'}}/>
          <div style={{width: 50, height: 50, backgroundColor: 'green', flexGrow: 1}}/>
        </C.FlexBox>
        <p>hello</p>
      </C.Container>
    );
  }
}

export default storeConnect([{itinerary: 'itinerary.itineraryProfile'}])(ItineraryProfile);
