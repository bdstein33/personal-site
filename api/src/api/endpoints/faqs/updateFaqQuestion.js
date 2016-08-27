import {faqQuestionSchema} from '../../joiSchema';
import {
  DBQuery,
  isValid,
  plain
} from '../../util';

export default function updateFaqQuestion(context, input) {
  return isValid(input, faqQuestionSchema, ['id'])
    .then(() => {
      return DBQuery.getOne(
        context,
        'faqQuestion',
        {
          where: {
            id: input.id
          },
          error: 'DoesNotExist',
          sequelizeObject: true
        }
      );
    })
    .then(question => {
      return question.update(input, {transaction: context.transaction});
    })
    .then(updatedFaqQuestion => {
      return plain(updatedFaqQuestion);
    });
}
