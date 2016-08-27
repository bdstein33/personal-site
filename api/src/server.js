import Debug from 'debug';

// Server Configuration
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import redis from 'connect-redis';
import morgan from 'morgan';

const debug = Debug('Server'),
  server = express(),
  port = 8000,
  RedisStore = redis(session);

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


// Session
server.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false, // don't resave session to store if it wasn't modified
  store: new RedisStore({
    host: process.env.REDIS_SERVER,
    port: process.env.REDIS_PORT
  }),
  rolling: true, // reset expiration to original maxAge on each request
  cookie: {
    maxAge: parseInt(process.env.SESSION_AGE, 10)
  },
  saveUninitialized: true
}));

server.use('/api/files', express.static(`${__dirname}/files`));

/******************************
API ROUTES
******************************/
server.use('/api/auth', require('./api/endpoints/auth'));
server.use('/api/session', require('./api/endpoints/session'));
server.use('/api/faqs', require('./api/endpoints/faqs'));
server.use('/api/iframe', require('./api/endpoints/iframe'));
server.use('/api/user', require('./api/endpoints/user'));

server.listen(port, () => {
  debug(`Listening on port ${port}`);
});

export default server;
