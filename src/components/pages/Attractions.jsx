import React from 'react';

import storeConnect from '../addons/storeConnect';

class Attractions extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    return (
      <div>
       Attractions page
      </div>
    );
  }
}

export default storeConnect(['application'])(Attractions);
