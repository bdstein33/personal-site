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
      <div>
        <C.Hero title={itinerary.name} />
      </div>
    );
  }
}

export default storeConnect([{itinerary: 'itinerary.itineraryProfile'}])(ItineraryProfile);
