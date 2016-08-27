import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';
import {faqActions} from '../../../actions';

import * as C from '../../shared';

class NewQuestionModal extends React.Component {
  static propTypes = {
    section: React.PropTypes.object,
    // From storeConnect
    actions: React.PropTypes.object,
    faq: React.PropTypes.object
  }

  @autobind
  updateFaqSection(data) {
    data.id = this.props.section.id;
    return this.props.actions.updateFaqSection(data)
      .then(() => {
        return this.props.actions.getFaq({id: this.props.faq.id});
      });
  }

  @autobind
  deleteFaqSection() {
    if (confirm('Are you sure you want to delete this section and any associated questions?')) {
      return this.props.actions.deleteFaqSection({id: this.props.section.id})
        .then(() => {
          return this.props.actions.getFaq({id: this.props.faq.id});
        });
    }
  }

  render() {
    const {section} = this.props;
    return (
      <div className='content-container'>
        <C.Form onSubmit={this.updateFaqSection}>
          <C.TextInput
            name='name'
            label='Name'
            defaultValue={section.name}
            autoFocus={true}
          />
          <C.Row columns={7}>
            <C.Column columns={3} className='no-padding'>
              <C.Submit value='UPDATE'/>
            </C.Column>
            <C.Column columns={1} className='no-padding'></C.Column>
            <C.Column columns={3} className='no-padding'>
              <C.Button
                text='DELETE'
                bColor='red'
                onClick={this.deleteFaqSection}
                style={{width: '100%', marginTop: 10, paddingLeft: 0, paddingRight: 0}}
              />
            </C.Column>
          </C.Row>
        </C.Form>
      </div>
    );
  }
}

export default storeConnect(
  [{faq: 'faq.faq'}],
  faqActions
)(NewQuestionModal);
