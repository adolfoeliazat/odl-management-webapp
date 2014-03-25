var rekuire = require('rekuire');
var config = require('config').ODL;
var Device = rekuire('src/models/device');

module.exports.getAllDevices = function(req, res) {
    Device.find({}, function(err, devices) {
        res.send(err ? 404 : devices);
    });
}

module.exports.newDevice = function(req, res) {
    Device.create(req.body, function(err, device) {
        res.send(err ? 404 : device);
    });
}