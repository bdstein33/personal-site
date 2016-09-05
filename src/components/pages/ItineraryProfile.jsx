import React from 'react';

import storeConnect from '../addons/storeConnect';

import * as C from '../shared';

class ItineraryProfile extends React.Component {
  static propTypes = {
    itinerary: React.PropTypes.object
  }

  render() {
    const {itinerary} = this.props;
    console.log(itinerary);
    return (
      <C.FlexBox
        flexDirection='column'
        style={{width: '100%', height: '100%'}}
        className='page-container'
      >
        <C.Container isFullWidth={true}>
          <C.Row>
            <C.Text fontSize={4} className='page-header'>{itinerary.name}</C.Text>
          </C.Row>
        </C.Container>

        <C.Schedule/>
      </C.FlexBox>
    );
  }
}

export default storeConnect([{itinerary: 'itinerary.itineraryProfile'}])(ItineraryProfile);

/*

  <div style={{display: 'flex', width: '100%', height: '100%', backgroundColor: 'red'}}>
    <div style={{backgroundColor: 'blue', height: '100%', flex: '1'}} />
     <div style={{backgroundColor: 'green', height: '100%', flex: '1'}} />
  </div>

  <C.Container isFullWidth={true} padding={false} style={{height: '100%', backgroundColor: 'red'}}>

  </C.Container>
*/
