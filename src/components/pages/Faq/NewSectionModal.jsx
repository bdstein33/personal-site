import React from 'react';
import {autobind} from 'core-decorators';
import {merge} from 'lodash';

import storeConnect from '../../addons/storeConnect';
import {faqActions} from '../../../actions';

import * as C from '../../shared';

class NewSectionModal extends React.Component {
  static propTypes = {
    // From storeConnect
    actions: React.PropTypes.object,
    faq: React.PropTypes.object,
    user: React.PropTypes.object
  }

  @autobind
  createFaqQuestion(data) {
    return this.props.actions.createFaqSection(merge(data, {faqId: this.props.faq.id}))
      .then(result => {
        if (!result.error) {
          return this.props.actions.getFaq({id: this.props.faq.id, userId: this.props.user.id});
        }
      });
  }

  render() {
    return (
      <div className='content-container'>
        <C.Form onSubmit={this.createFaqQuestion}>
            <C.TextInput
              name='name'
              placeholder='Name'
              autoFocus={true}
            />
            <C.Submit value='CREATE'/>
        </C.Form>
      </div>
    );
  }
}

export default storeConnect([{faq: 'faq.faq'}, {user: 'application.user'}], faqActions)(NewSectionModal);
