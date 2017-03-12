import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';
import {modalActions, authActions} from '../../../actions';

import TopNavLink from './TopNavLink';
import LogInModal from '../../pages/Landing/LogInModal';
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
          <TopNavLink href='/' label={'Ben\'s Site'} className='logo'/>
          <TopNavLink href='/number-identifier' label='Number Identifier'/>
          <TopNavLink href='/itineraries/1' label='Schedule' />
          <TopNavLink href='/reference' label='Reference Components'/>
          {
            !loggedIn
            ? <TopNavLink label='Log In' float='right' onClick={this.showLogin}/>
            : <TopNavLink label='Log Out' float='right' onClick={this.logOut} className='topnav-link-right'/>
          }
        </Container>
      </div>
    );
  }
}

export default storeConnect(['application'], modalActions, authActions)(TopNav);
