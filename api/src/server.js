import Debug from 'debug';

// Server Configuration
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const debug = Debug('Server'),
  server = express(),
  port = 8000;

/******************************
EXPRESS CONFIGURATION
******************************/
// Request parsing
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(morgan('tiny'));

// Allow CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

/******************************
API ROUTES
******************************/
server.use('/api/auth', require('./api/endpoints/auth'));
server.use('/api/user', require('./api/endpoints/user'));
server.use('/api/itinerary', require('./api/endpoints/itinerary'));

server.listen(port, () => {
  debug(`Listening on port ${port}`);
});

export default server;
