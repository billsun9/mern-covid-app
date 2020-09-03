const express = require('express');
const router = express.Router();
const Donation = require('../models/donation.model');
const axios = require('axios');

require('dotenv').config();

// gets all donations
router.route('/').get((req,res) => {
    Donation.find()
    .then(donations => res.json(donations))
    .catch(err => res.status(400).json('error: '+err));
});

// add new donation
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

            let newDonation = new Donation({
                name,
                phone,
                location: loc,
                lat,
                lng,
                item,
                description,
                date
            });
        
            newDonation.save()
            .then(() => res.json('donation added'))
            .catch(err => res.status(400).json('error: '+err));
        })
        .catch(err => console.log(err));
});

// get specific donation
router.route('/:id').get((req,res) => {
    Donation.findById(req.params.id)
    .then(donation => res.json(donation))
    .catch(err => res.status(400).json('error: '+err));
});

// delete specific donation
router.route('/:id').delete((req,res) => {
    Donation.findByIdAndDelete(req.params.id)
    .then(() => res.json('donation deleted'))
    .catch(err => res.status(400).json('error: '+err));
});

//update specific donation
// router.route('/update/:id').post((req,res) => {
//     Donation.findById(req.params.id)
//     .then(donation => {
//         donation.name = req.body.name;
//         donation.phone = Number(req.body.phone);
//         donation.location = req.body.location;
//         donation.item = req.body.item;
//         donation.description = req.body.description;
//         donation.date = Date.parse(req.body.date);
        
//         donation.save()
//         .then(() => res.json('donation updated'))
//         .catch(err => res.status(400).json('error: ' + err))
//     })
//     .catch(err => res.status(400).json('error: ' + err))
// })
module.exports = router;