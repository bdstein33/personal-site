import React from 'react';

import storeConnect from '../addons/storeConnect';
import * as C from '../shared';

class Test extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    return (
      <C.Container>
        <C.DrawingCanvas>
        </C.DrawingCanvas>
      </C.Container>
    );
  }
}

export default storeConnect(['application'])(Test);
