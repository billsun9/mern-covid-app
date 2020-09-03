const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    location: { type: String, required: true },
    lat: { type: String, required: true },
    lng: { type: String, required: true },
    item: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
});

const Request = mongoose.model('request', requestSchema);

module.exports = Request;