import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';
import {faqActions, modalActions} from '../../../actions';

import * as C from '../../shared';
import EditQuestionModal from './EditQuestionModal';

class FaqQuestion extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object,
    question: React.PropTypes.object,
    onClick: React.PropTypes.func
  }

  @autobind
  showEditQuestionModal() {
    this.props.actions.showModal(
      <EditQuestionModal question={this.props.question}/>,
      'Edit Question'
    );
  }

  render() {
    return (
        <C.Container className='faq-question clickable' isFullWidth={true}>
          <C.Text
            className='question-name'
            onClick={this.showEditQuestionModal}
          >
            {this.props.question.name}
          </C.Text>
        </C.Container>
    );
  }
}

export default storeConnect(
  [
    {faq: 'faq.faq'},
    {user: 'application.user'}
  ],
  modalActions,
  faqActions
)(FaqQuestion);
