var express = require('express');
var job = require('./lib/job.js');
var worker = require('./lib/worker.js');

var app = express();
job.austinJob.schedule();

app.get('/city/:cityId', function (req, res) {
    var weatherCode = worker.reactToCity(req.params.cityId);
    res.send(weatherCode);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;


    console.log('Example app listening at http://%s:%s', host, port);
});
