import React from 'react'


import cookie from 'cookie'
import { Loader } from "@googlemaps/js-api-loader"
import { GoogleMap, Marker, useLoadScript} from '@react-google-maps/api'

require('dotenv').config();

const libraries = ["places"]

const mapContainerStyle = {
    width: "25vw",
    height: "25vw",
}



const GoogleMapImg = (props) => {
    const { listing , user, aListing } = props;
    // let latlocation = parseInt(aListing.lat);
    // let lnglocation = parseInt(aListing.lng);

    // const center = {
    //     lat: 30.662680,
    //     lng: -97.923860,
    // }

    const markSpot = {position:{lat: parseFloat(aListing.lat), lng: parseFloat(aListing.lng)}}
    

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps"

    console.log('cookie: ', cookie.parse(document.cookie))
    console.log('listing: ', listing)
    console.log('user: ', user)
    console.log('google maps props: ' , props)
    console.log('aListing: ', aListing)
    // console.log('lat in aListingg: ', latlocation)

    const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

    console.log('LoggedIn cookie', cookies.loggedIn)


    return (
        
        <div >
            <h2>Inside google map page</h2>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={16} 
                center={{lat: parseFloat(aListing.lat),
                    lng: parseFloat(aListing.lng)}}
                >
                    <Marker position={{lat: parseFloat(aListing.lat),
                    lng: parseFloat(aListing.lng)}} />
            </GoogleMap>
        </div>
    )
}


export default GoogleMapImg
