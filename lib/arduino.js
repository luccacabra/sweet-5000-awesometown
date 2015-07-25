var five = require("johnny-five");

var board = new five.Board();
var sun;
var cloud;
var rain;
var austin;
var london;
var vannes;


board.on("ready", function() {
    sun = new five.Led(8);
    cloud = new five.Led(9);
    rain = new five.Led(10);

    // City IDs
    austin = 4671654;
    london = 4298960;
    vannes = 2970777;

    var register = new five.ShiftRegister({
        pins: {
          data: 2,
          clock: 3,
          latch: 4
        }
    });

    button = new five.Button(7);
    // Inject the `button` hardware into
    // the Repl instance's context;
    // allows direct command line access
    board.repl.inject({
        button: button
    });

    button.on("down", function() {
        nextCity();
    });

    regvalue = 0;

    function nextCity() {
        regvalue = regvalue > 0x11 ? regvalue >> 1 : 0x44;
        register.send(regvalue);

        console.log(regvalue);

        switch (regvalue) {
            case 0x11 :
                // getCity(austin);
                console.log('Austin: ' + austin);
                break;
            case 0x22 :
                // getCity(london);
                console.log('London: ' + london);
                break;
            case 0x44 :
                // getCity(vannes);
                console.log('Vannes: ' + vannes);
                break;
        }
    };

});


// LED Animations
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