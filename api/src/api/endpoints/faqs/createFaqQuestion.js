import {faqQuestionSchema} from '../../joiSchema';
import {
  DBQuery,
  isValid,
  plain
} from '../../util';

export default function createFaqQuestion(context, input) {
  return isValid(input, faqQuestionSchema, ['sectionId', 'name', 'content'], ['id'])
    .then(() => {
      return DBQuery.getOne(
        context,
        'faqQuestion',
        {
          where: input,
          error: 'AlreadyExists'
        }
      );
    })
    .then(() => {
      return context.db.faqQuestion.create(input, {transaction: context.transaction});
    })
    .then(createdFaqQuestion => {
      return plain(createdFaqQuestion);
    });
}
