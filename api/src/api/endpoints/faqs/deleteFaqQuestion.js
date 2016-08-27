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
      return question.destroy(input, {transaction: context.transaction});
    })
    .then(deletedFaqQuestion => {
      return plain(deletedFaqQuestion);
    });
}
