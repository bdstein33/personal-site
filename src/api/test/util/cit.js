import db from '../../../db';

/**
 * Wraps mocha it() function around api function handler
 * @param  {String}  testName
 * @param  {Function} testFunction
 */
export default (testName, testFunction) => {
  // it(testName, () => {
    const context = {db};

    return new Promise(resolve => {
      Promise.resolve(db.sequelize.transaction(transaction => {
        context.transaction = transaction;

        return testFunction.call(null, context);
      }));
    }).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    })

    // .then(() => {
    //   context.transaction.rollback();
    // }).catch(() => {
    //   context.transaction.rollback();
    // });
  // });
};
