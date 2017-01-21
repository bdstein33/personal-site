require('localenv');

require('babel-register')({
  only: [__dirname]
});

const Debug = require('debug');
Debug.enable(process.env.DEBUG);

require('./server');
