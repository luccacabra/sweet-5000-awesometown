var five = require("johnny-five");

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

exports.weatherStation = function (weatherCode) {
	console.log("weatherCode: " + weatherCode);
    switch (weatherCode) {
        case "0":
        cloud.stop().off();
        rain.stop().off();
        sun.on();
        sunny(sun);
        break;
        case "1":
        sun.stop().off();
        rain.stop().off();
        cloud.on();
        cloudy(cloud);
        break;
        case "2":
        cloud.stop().off();
        sun.stop().off();
        rain.on();
        rainy(rain);
        break;
        case "3":
        break;
    }
};
