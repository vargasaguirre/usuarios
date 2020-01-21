var session = require('express-session');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
var Chart = require('chart.js');
const app = express();
var bodyParser = require('body-parser');
var connection = require('./conexion');
var validate = require('./middleware/validate');
// settings
app.use(session({secret: 'pass12344321ssap'}));
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Dependencias de rutas
var index = require('./routes/index')(connection,validate);
var usuarios = require ('./routes/usuarios')(connection,validate);
// routes
app.use(index);
app.use('/users',usuarios);
// static files
app.use(express.static(path.join(__dirname, 'public')));
// listening the Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
module.exports = app;
