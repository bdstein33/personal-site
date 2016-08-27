import Debug from 'debug';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack.dev.config.js';

// Server Configuration
import express from 'express';
import bodyParser from 'body-parser';
// import morgan from 'morgan';


const debug = Debug('Server'),
  server = express(),
  port = process.env.PORT || 3000;

/******************************
WEBPACK AND HMR
******************************/
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);

  server.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    quiet: false,
    publicPath: webpackConfig.output.publicPath
  }));

  server.use(require('webpack-hot-middleware')(compiler));
}

/******************************
EXPRESS CONFIGURATION
******************************/
// Static files
server.use('/public', express.static(path.join(__dirname, '../build')));

// Request parsing
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

// Allow Cors
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


/******************************
ISOMORPHIC RENDERING
******************************/
server.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

server.listen(port, () => {
  debug(`Listening on port ${port}`);
});

export default server;
