var $ = require('jquery');
var express = require('express');
var helpers = require('./lib/utils/helpers.js');
var weather = require('./lib/weather/weather.js');

var app = express();

app.get('/city/:cityId', function (req, res) {
    var cityData = weather.WeatherObj.getCity(req.params.cityId);
    var weatherIcon = helpers.parseCode(cityData);
    res.send(helpers.weatherMapping(weatherIcon));
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;


    console.log('Example app listening at http://%s:%s', host, port);
});
