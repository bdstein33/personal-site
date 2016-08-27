import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../addons/storeConnect';
import request from '../../util/request';

class IFrame extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);

    request('IFRAME', {url: 'http://www.cnn.com'})
      .then(result => {
        console.log(result);

        this.refs.testFrame.contentDocument.addEventListener('click', this.handleClick);
        this.refs.testFrame.contentDocument.body.innerHTML = result;
      });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  @autobind
  handleClick(e) {
    e.preventDefault();
    e.target.style.color = 'red';
    console.log(e.target);
  }

  render() {
    const {user} = this.props.application;

    return (
      <div>
       {`Welcome ${user.firstName} ${user.lastName}`}
       <iframe ref='testFrame' style={{width: '80%', marginLeft: '10%', height: '700px'}}/>
      </div>
    );
  }
}

export default storeConnect(['application'])(IFrame);

/*
  <iframe src='https://www.optimizelyedit.com/http%3A%2F%2Fwww.google.com?optimizely_disable=true&optimizely_editor=true&optimizely_log=false&optimizely_include_innie=true&optimizely_cache_buster=1461566070001&optimizely_proxy_rewriter=true' style={{width: '100%', height: '700px'}}/>
*/
