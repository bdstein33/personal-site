import _ from 'lodash';
import {idSchema} from '../../joiSchema';
import {isValid, DBQuery} from '../../util';
import faqService from './_faqService';

export default function getUserFaqs(context, input) {
  return isValid(input, idSchema)
    .then(() => {
      return DBQuery.getAll(
        context,
        'faq',
        {
          where: {
            userId: input.id
          }
        }
      );
    });
}
