import React from 'react';

const Donation = () => {
    const initMap =  () => {
        let uluru = {lat: -25.344, lng: 131.036};
        let map = new google.maps.Map(
            document.getElementById('map'), 
            {zoom: 4, center: uluru}
        );
        let marker = new google.maps.Marker({position: uluru, map: map});
    }
    return ( 
        <div id="map">

        </div>
     );
}
 
export default Donation;