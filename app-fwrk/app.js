const  express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const compression = require('compression');
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });
   
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  // 
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple()
    }));
  }
var corsOptions = {
  origin: 'http://localhost:8081',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

var app = express();
app.use(bodyParser.json({ type: 'application/json'}));
app.use(cors(corsOptions));
app.use(compression());
//app.use(express.static(__dirname + '/client'));

// app.get('/alive', function (req, res) {
    
//     var port = server.address().port
//     var host = server.address().address
//     var port = server.address().port

//     res.send("app alive at http://%s:%s", host, port)
// })

module.exports = app;

module.exports.logger = logger;

module.exports.client_templatePath = './client/';

module.exports.db_user = 'idan.gvili';
module.exports.db_password = 'qwe123!@#';
module.exports.db_server = 'north-europe-mssql-server.database.windows.net';
module.exports.db_database = 'employers-interface-convertor-db';

module.exports.datalayer_url = 'http://localhost:8082';
module.exports.convertor_url = 'http://localhost:8083';
