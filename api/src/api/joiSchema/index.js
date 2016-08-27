import fs from 'fs';

const utils = {};
fs.readdirSync(`${__dirname}/`).forEach(file => {
  if (file !== 'index.js') {
    const name = file.replace('.js', '');
    utils[name] = require(`./${file}`);
  }
});

export default utils;
