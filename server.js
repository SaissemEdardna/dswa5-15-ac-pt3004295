var http = require('http');
var express = require('express');
var app = express();
var app = require('./config/express')();
const url = 'mongodb+srv://dswa5:Hq3Smkd0osggxNaq@cluster0.ircvu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const localUrl = 'mongodb://localhost/DSWA'
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});
