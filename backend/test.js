const axios = require('axios');
require('dotenv').config();

function geocode(location) {
    let info;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?',{
        params: {
            address: location,
            key: process.env.API_KEY}
            })
    .then(data => {
        let loc = data.data.results[0].formatted_address;
        let lat = data.data.results[0].geometry.location.lat;
        let lng = data.data.results[0].geometry.location.lng;
        let info = [loc, lat, lng];
        return info;
    })
    .catch(err => console.log(err));
            
}
let a = 22;
a = 3;
console.log(a);