import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';
import {faqActions} from '../../../actions';

import * as C from '../../shared';

class NewQuestionModal extends React.Component {
  static propTypes = {
    // From storeConnect
    actions: React.PropTypes.object,
    faq: React.PropTypes.object,
    user: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      content: null
    };
  }

  @autobind
  createFaqQuestion(data) {
    data.content = this.state.content.toString('html');

    return this.props.actions.createFaqQuestion(data)
      .then(() => {
        return this.props.actions.getFaq({id: this.props.faq.id, userId: this.props.user.id});
      });
  }

  @autobind
  updateContent(content) {
    this.setState({
      content
    });
  }

  render() {
    const sectionOptions = this.props.faq.sections.map(section => {
      return {
        label: section.name,
        value: section.id
      };
    });

    return (
      <div className='content-container' style={{width: 700}}>
        <C.Form onSubmit={this.createFaqQuestion}>
          <C.Row columns={6}>
            <C.Column columns={2} className='no-padding'>
              <C.SelectInput
                name='sectionId'
                label='Section'
                options={sectionOptions}
              />
            </C.Column>
          </C.Row>
            <C.TextArea
              name='name'
              placeholder='Question'
              autoFocus={true}
              rows={2}
            />
            <C.TextEditor
              onChange={this.updateContent}
              placeholder='Answer'
            />
            <C.Row columns={6}>
              <C.Column columns={2} className='no-padding'>
                <C.Submit value='CREATE'/>
              </C.Column>
            </C.Row>
        </C.Form>
      </div>
    );
  }
}

export default storeConnect([{faq: 'faq.faq'}, {user: 'application.user'}], faqActions)(NewQuestionModal);
