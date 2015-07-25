var $ = require('jquery');
var express = require('express');
var weather = require('./lib/weather/weather.js');

var app = express();

app.get('/', function (req, res) {
    var test = weather.WeatherObj.getCity('4671654');
    res.send(test);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;


    console.log('Example app listening at http://%s:%s', host, port);
});
