var five = require("johnny-five");
var WeatherCodes = require("./weather/weather_code.js");

var board = new five.Board();
var sun;
var cloud;
var rain;


board.on("ready", function() {
  sun = new five.Led(3);
  cloud = new five.Led(10);
  rain = new five.Led(5);
});

sunny = function(sunLed) {
	sunLed.pulse(1300);
}

cloudy = function(cloudLed) {
	cloudLed.pulse({
		easing: "linear",
		duration: 5000,
		cuePoints: [0, 0.25, 0.75, 1],
		keyFrames: [255, 80, 255, 50],
	});
}

rainy = function(rainyLed) {
	rainyLed.pulse({
		easing: "linear",
		duration: 1000,
		cuePoints: [0, 0.15, 0.50, 0.75, 0.9, 1],
		keyFrames: [255, 0, 100, 255, 0, 255],
	});
}

exports.WeatherStation = {
	report : function (weatherCode) {
		switch (weatherCode) {
			case WeatherCodes.SUNNY:
			sunny(sun);
			break;
			case WeatherCodes.CLOUDY:
			cloudy(cloud);
			break;
			case WeatherCodes.RAINY:
			rainy(rain);
			break;
			case WeatherCodes.SNOWY:
			break;
		}
	}
};
