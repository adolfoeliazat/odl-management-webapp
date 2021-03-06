var mongoose = require('mongoose');

var schema = mongoose.Schema({
    imei: { type: String, required: true, unique: true },
    guid: { type: String, required: true, unique: true },
    name: { type: String},
    brand: { type: String},
    modified: { type: Date, default: Date.now },
    image: { type: String },
    attributes: { type: Object },
    checkedIn: { type: Boolean, default: false },
});

module.exports = mongoose.model('Device', schema);