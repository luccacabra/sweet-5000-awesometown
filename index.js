var $ = require('jquery');
var express = require('express');
var helpers = require('./lib/utils/helpers.js');
var weather = require('./lib/weather/weather.js');
var worker = require('./lib/worker.js');

var app = express();

app.get('/city/:cityId', function (req, res) {
    var cityData = weather.WeatherObj.getCity(req.params.cityId);
    var weatherIcon = helpers.parseCode(cityData);
    var weatherCode = helpers.weatherMapping(weatherIcon);
    worker.weatherStation(weatherCode);
    res.send(weatherCode);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;


    console.log('Example app listening at http://%s:%s', host, port);
});
