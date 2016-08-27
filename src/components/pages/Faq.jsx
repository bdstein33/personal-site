import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../addons/storeConnect';
import {faqActions, modalActions} from '../../actions';

import * as C from '../shared';
import Hero from '../shared/Hero';
import FaqSection from './Faq/FaqSection';
import NewQuestionModal from './Faq/NewQuestionModal';
import NewSectionModal from './Faq/NewSectionModal';


class Faq extends React.Component {
  static propTypes = {
    application: React.PropTypes.object,
    // From router
    route: React.PropTypes.object,
    // From storeConnect
    actions: React.PropTypes.object,
    faq: React.PropTypes.object,
    user: React.PropTypes.object
  }

  @autobind
  showNewQuestionModal() {
    this.props.actions.showModal(
      <NewQuestionModal/>,
      'New Question'
    );
  }

  @autobind
  showNewSectionModal() {
    this.props.actions.showModal(
      <NewSectionModal/>,
      'New Section'
    );
  }

  @autobind
  deleteFaq() {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      this.props.actions.deleteFaq({id: this.props.faq.id});
    }
  }

  render() {
    const {faq} = this.props;
    return (
      <div>
        <Hero title={faq.name}/>
        <C.Row align='right' className='add-margin'>
          <C.Button
            bStyle='transparent'
            className='add-margin-left'
            onClick={this.showNewSectionModal}
          >
            NEW SECTION
          </C.Button>
          <C.Button
            bStyle='transparent'
            className='add-margin-left'
            onClick={this.showNewQuestionModal}
          >
            NEW QUESTION
          </C.Button>
          <C.Button
            bStyle='transparent'
            bColor='red'
            className='add-margin-left'
            onClick={this.deleteFaq}
          >
            DELETE FAQ
          </C.Button>
        </C.Row>
        {faq.sections.map((faqSection, i) => {
          return <FaqSection section={faqSection} key={`FaqSection-${i}`}/>;
        })}
      </div>
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
)(Faq);
