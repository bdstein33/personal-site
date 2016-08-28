import React from 'react';

import storeConnect from '../addons/storeConnect';

import * as C from '../shared';

class Clients extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    return (
      <div>
        <C.Hero title='Clients' />
      </div>
    );
  }
}

export default storeConnect(['application'])(Clients);
