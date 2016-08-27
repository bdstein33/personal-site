import React from 'react';
import {autobind} from 'core-decorators';
import storeConnect from '../../addons/storeConnect';
import {modalActions, authActions} from '../../../actions';

import LogInModal from './LogInModal';
import * as C from '../../shared';

class SignUpModal extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object
  };

  @autobind
  submitSignup(data) {
    this.props.actions.signUp(data);
  }

  @autobind
  showLogIn() {
    this.props.actions.showModal(<LogInModal />, 'Log In');
  }

  render() {
    return (
      <div className='content-container bottom-section-padding'>
        <C.Form onSubmit={this.submitSignup}>
          <C.TextInput name='firstName' placeholder='First Name' autoFocus={true}/>
          <C.TextInput name='lastName' placeholder='Last Name'/>
          <C.TextInput name='email' placeholder='Email'/>
          <C.TextInput name='password' type='password' placeholder='Password'/>
          <C.Submit value='SIGN UP'/>
        </C.Form>

        <div className='bottom'>
          <C.Text>
            Already have an account? <span onClick={this.showLogIn} className='text-link'>Log In</span>
          </C.Text>
        </div>

      </div>
    );
  }
}

export default storeConnect(null, modalActions, authActions)(SignUpModal);
