var helpers = require('./utils/helpers.js');
var weather = require('./weather.js');
var arduino = require('./arduino.js');

exports.reactToCity = function( cityId ) {
    var cityData = weather.WeatherObj.getCity(cityId);
    var weatherIcon = helpers.parseCode(cityData);
    var weatherCode = helpers.weatherMapping(weatherIcon);
    arduino.weatherStation(weatherCode);
    return weatherCode;
};
