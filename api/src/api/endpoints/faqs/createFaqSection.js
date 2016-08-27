import {faqSectionSchema} from '../../joiSchema';
import {
  DBQuery,
  isValid,
  plain
} from '../../util';

export default function createFaq(context, input) {
  return isValid(input, faqSectionSchema, ['faqId', 'name'], ['id'])
    .then(() => {
      return DBQuery.getOne(
        context,
        'faqSection',
        {
          where: input,
          error: 'AlreadyExists'
        }
      );
    })
    .then(() => {
      return context.db.faqSection.create(input, {transaction: context.transaction});
    })
    .then(createdFaqSection => {
      return plain(createdFaqSection);
    });
}
