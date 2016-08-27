import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';
import {modalActions, authActions} from '../../../actions';

import SignUpModal from './SignUpModal';
import * as C from '../../shared';

class LogInModal extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired
  }

  @autobind
  submitLogIn(data) {
    this.props.actions.logIn(data);
  }

  @autobind
  showSignUp() {
    this.props.actions.showModal(<SignUpModal />, 'Sign Up');
  }

  render() {
    return (
      <div className='content-container bottom-section-padding'>
        <C.Form onSubmit={this.submitLogIn}>
          <C.TextInput name='email' placeholder='Email' autoComplete='off' autoFocus={true}/>
          <C.TextInput name='password' type='password' placeholder='Password'/>
          <C.Submit value='LOG IN'/>
        </C.Form>

        <div className='bottom'>
          <C.Text>
            Don't have an account? <span onClick={this.showSignUp} className='text-link'>Sign up</span>
          </C.Text>
        </div>
      </div>
    );
  }
}

export default storeConnect(null, modalActions, authActions)(LogInModal);
