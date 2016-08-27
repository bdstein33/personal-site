export default (context) => {
  return new Promise(resolve => {
    delete context.session.user;
    resolve(true);
  });
};
