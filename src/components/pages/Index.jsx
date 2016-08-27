import React from 'react';
import storeConnect from '../addons/storeConnect';

import Home from './Home';
import Landing from './Landing';


class Index extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    return (
      <div>
        {this.props.application.loggedIn ? <Home /> : <Landing />}
      </div>
    );
  }
}

export default storeConnect(['application'])(Index);
