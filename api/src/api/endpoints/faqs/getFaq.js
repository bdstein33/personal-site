import {faqSchema} from '../../joiSchema';
import {isValid, DBQuery} from '../../util';

export default function getFaq(context, input) {
  return isValid(input, faqSchema, ['id'])
    .then(() => {
      return DBQuery.getOne(
        context,
        'faq',
        {
          where: input
        }
      )
        .then(faq => {
          return DBQuery.getAll(
            context,
            'faqSection',
            {
              where: {
                faqId: faq.id
              },
              include: [{ model: context.db.faqQuestion}]
            }
          )
            .then(sections => {
              return {
                ...faq,
                sections
              };
            });
        });
    });
}
