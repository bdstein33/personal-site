import _ from 'lodash';
import {plain} from '../../util';

const faqService = {
  createSection(context, input) {
    let output;
    return context.db.faqSection.create(input, {transaction: context.transaction})
      .then(createdSection => {
        output = plain(createdSection);

        if (!input.questions || input.questions.length === 0) {
          return [];
        }

        return Promise.all(input.questions.map(question => {
          return faqService.createQuestion(context, _.merge(question, {sectionId: createdSection.id}));
        }));
      }).then(questions => {
        output.questions = questions;
        return output;
      });
  },

  updateSection(context, input) {

  },

  deletesection(context, input) {

  },

  createQuestion(context, input) {
    return context.db.faqQuestion.create(input, {transaction: context.transaction})
      .then(question => {
        return plain(question);
      });
  },

  updateQuestion(context, input) {
    
  },

  deleteQuestion(context, input) {
    
  }
};

export default faqService;
