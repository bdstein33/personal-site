export default (context) => {
  return new Promise(resolve => {
    console.log('GETTING SESSION:::', context.session);
    resolve(context.session);
  });
};
