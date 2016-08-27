import {faqSchema} from '../../joiSchema';
import {
  DBQuery,
  isValid,
  plain
} from '../../util';

export default function updateFaq(context, input) {
  return isValid(input, faqSchema, ['id'])
    .then(() => {
      return DBQuery.getOne(
        context,
        'faq',
        {
          where: {
            id: input.id
          },
          error: 'DoesNotExist',
          sequelizeObject: true
        }
      );
    })
    .then(faq => {
      return faq.destroy(input, {transaction: context.transaction});
    })
    .then(updatedFaq => {
      return plain(updatedFaq);
    });
}
