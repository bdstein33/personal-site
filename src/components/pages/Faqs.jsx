import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../addons/storeConnect';

import NewFaqModal from './Faqs/NewFaqModal';
import {faqActions, modalActions} from '../../actions';
import FaqOverview from './Faqs/FaqOverview';
import * as C from '../shared';


class Faqs extends React.Component {
  static propTypes = {
    application: React.PropTypes.object,
    // From router
    route: React.PropTypes.object,
    // From storeConnect
    actions: React.PropTypes.object,
    userFaqs: React.PropTypes.array,
    user: React.PropTypes.object
  }

  @autobind
  showNewFaqModal() {
    this.props.actions.showModal(
      <NewFaqModal onCompleteFunc={this.props.route.onEnter}/>,
      'New FAQ'
    );
  }

  render() {
    const {user} = this.props;
    return (
      <div>
        <C.Hero title={`${user.firstName} ${user.lastName}'s FAQs`}/>
        <C.Row align='right' className='add-margin'>
          <C.Button onClick={this.showNewFaqModal}>NEW</C.Button>
        </C.Row>
        {
          this.props.userFaqs.map((faq, i) => {
            return <FaqOverview faq={faq} key={`${i}`}/>;
          })
        }
      </div>
    );
  }
}

export default storeConnect([{userFaqs: 'faq.userFaqs'}, {user: 'application.user'}], modalActions, faqActions)(Faqs);
