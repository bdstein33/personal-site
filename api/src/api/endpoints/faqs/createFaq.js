import _ from 'lodash';
import {faqSchema} from '../../joiSchema';
import {isValid, plain} from '../../util';
import faqService from './_faqService';

export default function createFaq(context, input) {
  let output;

  return isValid(input, faqSchema, ['userId'], ['id'])
    .then(() => {
      // Create FAQ
      return context.db.faq.create(_.omit(input, 'sections'), {transaction: context.transaction});
    })
    .then(createdFaq => {
      output = plain(createdFaq);

      if (!input.sections || input.sections.length === 0) {
        return [];
      }

      // If FAQ has any sections, create them
      return Promise.all(input.sections.map(section => {
        return faqService.createSection(context, _.merge(section, {faqId: createdFaq.id}));
      }));
    })
    .then(sections => {
      output.sections = sections;
      return output;
    });
}
