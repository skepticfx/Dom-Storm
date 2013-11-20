
/**
 * Dom Storm. Built using Express, EJS, 
 */

var express = require('express');
var controllers = require('./controllers');
var modules = require('./controllers/modules.js');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware stack
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use("/public",express.static(path.join(__dirname, '/public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// routing
controllers.set(app);
modules.set(app);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Dom Storm server listening on port ' + app.get('port'));
});
