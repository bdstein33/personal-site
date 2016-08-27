import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';

import TopNavLink from './TopNavLink';
import LogInModal from '../../pages/Landing/LogInModal';
import {modalActions, authActions} from '../../../actions';
import Container from '../layout/Container';

class TopNav extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    application: React.PropTypes.object
  };

  @autobind
  showLogin() {
    this.props.actions.showModal(<LogInModal />, 'Log In');
  }

  @autobind
  logOut() {
    this.props.actions.logOut();
  }

  render() {
    const {loggedIn} = this.props.application;
    return (
      <div className='topnav'>
        <Container isFullWidth={true}>
          {
            !loggedIn ?
              <div>
                <TopNavLink href='/' label='Logo' className='logo'/>
                <TopNavLink label='LOG IN' float='right' onClick={this.showLogin}/>
              </div>
            :
              <div>
                <TopNavLink href='/' label='HOME' />
                <TopNavLink href='/reference' label='REFERENCE' />
                <TopNavLink href='/test' label='TEST' />
                <TopNavLink label='LOG OUT' float='right' onClick={this.logOut} className='topnav-link-right'/>
              </div>
          }
        </Container>
      </div>
    );
  }
}

export default storeConnect(['application'], modalActions, authActions)(TopNav);
