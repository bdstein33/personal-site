import React from 'react';

import storeConnect from '../addons/storeConnect';

class Home extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    const {user} = this.props.application;

    return (
      <div>
       {`Welcome ${user.firstName} ${user.lastName}`}
      </div>
    );
  }
}

export default storeConnect(['application'])(Home);
