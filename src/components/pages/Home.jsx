import React from 'react';

import storeConnect from '../addons/storeConnect';

import * as C from '../shared';

class Home extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    const {user} = this.props.application;

    return (
      <div>
        <C.Hero title='LANDING PAGE'/>
        <C.Container
          centerContent={true}
          className='add-margin-top'
        >
          {`Welcome ${user.firstName} ${user.lastName}`}
        </C.Container>
      </div>
    );
  }
}

export default storeConnect(['application'])(Home);
