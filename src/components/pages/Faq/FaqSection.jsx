import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';
import {modalActions} from '../../../actions';

import * as C from '../../shared';
import EditSectionModal from './EditSectionModal';
import FaqQuestion from './FaqQuestion';

class FaqSection extends React.Component {
  static propTypes = {
    section: React.PropTypes.object,
    // From storeConnect
    actions: React.PropTypes.object
  }

  @autobind
  showEditSectionModal() {
    this.props.actions.showModal(
      <EditSectionModal section={this.props.section}/>,
      'Edit Section'
    );
  }

  render() {
    const {section} = this.props;
    return (
      <C.Container
        isFullWidth={true}
        className='faq-section'
      >
        <C.Text
          fontSize={4}
          className='section-name add-padding-side clickable color-blue'
          onClick={this.showEditSectionModal}
        >
          {section.name}
        </C.Text>
        <C.Container
          isFullWidth={true}
          className='question-container'
        >
          {section.faqQuestions.map((question, i) => {
            return (
              <FaqQuestion
                question={question}
                key={`faqQuestion-${i}`}
              />
            );
          })}
        </C.Container>
      </C.Container>
    );
  }
}

export default storeConnect(
  null,
  modalActions
)(FaqSection);

