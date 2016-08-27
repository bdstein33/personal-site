import {faqSectionSchema} from '../../joiSchema';
import {
  DBQuery,
  isValid,
  plain
} from '../../util';

export default function updateFaqQuestion(context, input) {
  return isValid(input, faqSectionSchema, ['id'])
    .then(() => {
      return DBQuery.getOne(
        context,
        'faqSection',
        {
          where: {
            id: input.id
          },
          error: 'DoesNotExist',
          sequelizeObject: true
        }
      );
    })
    .then(section => {
      return section.destroy(input, {transaction: context.transaction});
    })
    .then(deletedFaqSection => {
      return plain(deletedFaqSection);
    });
}
