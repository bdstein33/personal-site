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
        <Container isFullWidth={true} padding={false}>
          {
            !loggedIn ?
              <div>
                <TopNavLink href='/' label='TripShare' className='logo'/>
                <TopNavLink label='Log In' float='right' onClick={this.showLogin}/>
              </div>
            :
              <div>
                <TopNavLink href='/' label='Home' />
                <TopNavLink href='/itineraries' label='Itineraries' />
                <TopNavLink href='/clients' label='Clients' />
                <TopNavLink href='/attractions' label='Attractions' />
                <TopNavLink href='/reference' label='Reference' />
                <TopNavLink href='/test' label='Test' />
                <TopNavLink label='Log Out' float='right' onClick={this.logOut} className='topnav-link-right'/>
              </div>
          }
        </Container>
      </div>
    );
  }
}

export default storeConnect(['application'], modalActions, authActions)(TopNav);
