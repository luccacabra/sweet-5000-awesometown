var schedule = require('node-schedule');

var worker = require('./worker.js');

var AUSTIN_CITY_CODE = '4671654';

exports.austinJob = schedule.scheduleJob('0 * * * *', function(){
    worker.reactToCity(AUSTIN_CITY_CODE);
});