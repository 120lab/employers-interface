const  express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:8081',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

var app = express();
app.use(bodyParser.json({ type: 'application/json'}));
app.use(cors(corsOptions));
//app.use(express.static(__dirname + '/client'));

// app.get('/alive', function (req, res) {
    
//     var port = server.address().port
//     var host = server.address().address
//     var port = server.address().port

//     res.send("app alive at http://%s:%s", host, port)
// })

module.exports = app;

module.exports.client_templatePath = './client/';

module.exports.db_user = 'idan.gvili';
module.exports.db_password = 'qwe123!@#';
module.exports.db_server = 'north-europe-mssql-server.database.windows.net';
module.exports.db_database = 'employers-interface-convertor-db';

module.exports.datalayer_url = 'http://localhost:8082';
module.exports.convertor_url = 'http://localhost:8083';
