import promisify from 'es6-promisify';
import Joi from 'joi';
import _ from 'lodash';

const validate = promisify(Joi.validate);

export default (input, joiSchema, requiredInputs, forbiddenInputs) => {
  joiSchema = Object.assign({}, joiSchema);
  const updateSchema = (columns, change) => {
    if (!!columns && _.isArray(columns)) {
      columns.forEach(col => {
        if (joiSchema.hasOwnProperty(col)) {
          joiSchema[col] = joiSchema[col][change]();
        } else {
          return Promise.reject(new Error('Column specified in requiredInputs does not exist: {{col}}'));
        }
      });
    }
  };

  updateSchema(requiredInputs, 'required');
  updateSchema(forbiddenInputs, 'forbidden');

  return validate(input, Joi.object().keys(joiSchema))
    .catch(err => {
      const errorText = err.details.map(error => {
        return error.message;
      }).join(', ').replace(/['"]+/g, '');

      console.error(`VALIDATION ERROR: ${errorText}`);

      return Promise.reject(new Error(errorText));
    });
};
