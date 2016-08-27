import React from 'react';
import {autobind} from 'core-decorators';
import {merge} from 'lodash';

import storeConnect from '../../addons/storeConnect';
import {faqActions} from '../../../actions';

import * as C from '../../shared';

class NewFaqModal extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object,
    user: React.PropTypes.object,
    onCompleteFunc: React.PropTypes.func
  }

  @autobind
  createFaq(data) {
    return this.props.actions.createFaq(merge(data, {userId: this.props.user.id}))
      .then(() => {
        return this.props.onCompleteFunc();
      });
  }

  render() {
    return (
      <div className='content-container'>
        <C.Form onSubmit={this.createFaq}>
          <C.TextInput name='name' placeholder='Name' autoComplete='off' autoFocus={true}/>
          <C.Submit value='CREATE'/>
        </C.Form>
      </div>
    );
  }
}

export default storeConnect([{user: 'application.user'}], faqActions)(NewFaqModal);
