require('localenv');

// const path = require('path');

require('babel-register')({
  only: [__dirname]
});

const Debug = require('debug');
Debug.enable(process.env.DEBUG);

require('./server');
