var jquery = require('jquery');
var request = require('request');
var helpers = require('../utils/helpers.js');

var WEATHER_CONFIG = jquery.getJSON("../../config/weather.json");
var WEATHER_ENDPOINT = "http://" + WEATHER_CONFIG.get("domain") + "/data/" + WEATHER_CONFIG.get("version");


exports.WeatherObj = {
    getCity : function( cityId ) {
        var reqURL = WEATHER_ENDPOINT + "weather/city?id=" + cityId + "&APPID=" + WEATHER_CONFIG.get("api_key");
        request(reqURL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body); // Show the HTML for the Google homepage.
                helpers.parseCode('');
            }
        })
    }
};




