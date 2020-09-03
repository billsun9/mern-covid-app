const express = require('express');
const router = express.Router();
const Request = require('../models/request.model');
const axios = require('axios');

require('dotenv').config();

// gets all requests
router.route('/').get((req,res) => {
    Request.find()
    .then(requests => res.json(requests))
    .catch(err => res.status(400).json('error: '+err));
});

// add new request
router.route('/add').post((req,res) => {
    // user inputs
    let name = req.body.name;
    let phone = req.body.phone;
    let location = req.body.location;
    let item = req.body.item;
    let description = req.body.description;
    let date = Date.parse(req.body.date);

    // converts user input of location into standardized location name, lat, lng
    // and then saves it to database
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?',{
        params: {
            address: location,
            key: process.env.API_KEY}
            })
        .then(data => {
            let loc = data.data.results[0].formatted_address;
            let lat = data.data.results[0].geometry.location.lat;
            let lng = data.data.results[0].geometry.location.lng;

            let newRequest = new Request({
                name,
                phone,
                location: loc,
                lat,
                lng,
                item,
                description,
                date
            });
        
            newRequest.save()
            .then(() => res.json('request added'))
            .catch(err => res.status(400).json('error: '+err));
        })
        .catch(err => console.log(err));
});

// get specific request
router.route('/:id').get((req,res) => {
    Request.findById(req.params.id)
    .then(request => res.json(request))
    .catch(err => res.status(400).json('error: '+err));
});

// delete specific request
router.route('/:id').delete((req,res) => {
    Request.findByIdAndDelete(req.params.id)
    .then(() => res.json('request deleted'))
    .catch(err => res.status(400).json('error: '+err));
});


module.exports = router;