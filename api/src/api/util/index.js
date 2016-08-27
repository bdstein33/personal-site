import fs from 'fs';

const util = {};
fs.readdirSync(`${__dirname}/`).forEach(file => {
  if (file !== 'index.js') {
    const name = file.replace('.js', '');
    util[name] = require(`./${file}`);
  }
});

export default util;
