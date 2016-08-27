import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';
import {faqActions} from '../../../actions';

import * as C from '../../shared';

class NewQuestionModal extends React.Component {
  static propTypes = {
    question: React.PropTypes.object,
    // From storeConnect
    actions: React.PropTypes.object,
    faq: React.PropTypes.object,
    user: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      content: props.question.content
    };
  }

  @autobind
  updateFaqQuestion(data) {
    data.content = this.state.content.toString('html');
    data.id = this.props.question.id;
    return this.props.actions.updateFaqQuestion(data)
      .then(() => {
        return this.props.actions.getFaq({id: this.props.faq.id, userId: this.props.user.id});
      });
  }

  @autobind
  deleteFaqQuestion() {
    if (confirm('Are you sure you want to delete this question?')) {
      return this.props.actions.deleteFaqQuestion({id: this.props.question.id})
        .then(() => {
          return this.props.actions.getFaq({id: this.props.faq.id, userId: this.props.user.id});
        });
    }
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

    const {question} = this.props;

    return (
      <div className='content-container' style={{width: 700}}>
        <C.Form onSubmit={this.updateFaqQuestion}>
          <C.Row columns={6}>
            <C.Column columns={2} className='no-padding'>
              <C.SelectInput
                name='sectionId'
                label='Section'
                options={sectionOptions}
                defaultValue={question.sectionId}
              />
            </C.Column>
          </C.Row>
            <C.TextArea
              name='name'
              placeholder='Question'
              autoFocus={true}
              rows={2}
              defaultValue={question.name}
            />
            <C.TextEditor
              onChange={this.updateContent}
              placeholder='Answer'
              defaultValue={question.content}
            />
            <C.Row columns={6}>
              <C.Column columns={2} className='no-padding'>
                <C.Submit value='UPDATE'/>
              </C.Column>
              <C.Column columns={2} className='no-padding'></C.Column>
              <C.Column columns={2} className='no-padding'>
                <C.Button
                  text='DELETE'
                  bColor='red'
                  onClick={this.deleteFaqQuestion}
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
  [
    {faq: 'faq.faq'},
    {user: 'application.user'}
  ],
  faqActions
)(NewQuestionModal);
