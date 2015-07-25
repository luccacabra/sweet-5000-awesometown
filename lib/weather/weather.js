var jquery = require('jquery');
var request = require('sync-request');
var helpers = require('../utils/helpers.js');

var WEATHER_CONFIG = require("../../config/weather.json");
var WEATHER_ENDPOINT = "http://" + WEATHER_CONFIG.domain + "/data/" + WEATHER_CONFIG.version;


exports.WeatherObj = {
    getCity : function( cityId ) {
        var reqURL = WEATHER_ENDPOINT + "/weather?id=" + cityId + "&APPID=" + WEATHER_CONFIG.api_key;
        var res = request('GET', reqURL);
        return JSON.parse(res.body.toString('UTF-8'));
    }
};