define([
    'jquery',
    'requests'
], function (
    $,
    request
) {
    var WEATHER_CONFIG = $.getJSON("config/weather.json");
    var WEATHER_ENDPOINT = "http://" + WEATHER_CONFIG.get("domain") + "/data/" + WEATHER_CONFIG.get("version");

    function getCity( cityId ) {
        var reqURL = WEATHER_ENDPOINT + "weather/city?id=" + cityID + "&APPID=" + WEATHER_CONFIG.get("api_key");
        request(reqURL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body); // Show the HTML for the Google homepage.
            }
        })
    }
});




