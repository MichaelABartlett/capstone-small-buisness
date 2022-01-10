import React, { Component } from 'react'
// import cookie from 'cookie'


import LoggedUser from '../containers/LoggedUser'

const axios = require('axios')
require('dotenv').config();


const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

class AddNewListing extends Component {
    constructor(props){
        super(props)

        this.state = {
            open : '',
            name : '',
            description : '',
            hours : '',
            address : '',
            lat : '',
            lng : ''
        }
    }


    handleChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params:{
                address:this.state.address,
                key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY
            }
        })
        .then(function(response, lat, lng){
            lat = response.data.results[0].geometry.location.lat;
            lng = response.data.results[0].geometry.location.lng;
            // console.log('response in axois fetch', response)
            // console.log('lat in axios: ', lat)
            // console.log('lng in axios: ', lng)
            payload.lat = lat;
            payload.lng = lng;
        })
        .catch(function(error){
            console.log('error in axio fetch', error)
        })
        payload.id = (this.props.listing.length + 1)
        delete payload.open
        // console.log("THE LISTING", payload)
        this.props.addListing(payload)
        this.setState({name: "", description: "", hours: "", address: ""})

    }


    render () {
        // console.log('props.listing: ', this.props.listing)
        // console.log('props.user: ',this.props.user)
        return (
            <div className='add-listing-page' >
                {cookies.loggedIn ? <LoggedUser/> : null}
                <h2>Add a new listing</h2>
                <h4>Name: {this.state.name}</h4>
                <h4>Description: {this.state.description}</h4>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input className='new-listing-input' type='text' id='name' placeholder='Name' value={this.state.name} onChange={this.handleChange} />
                    <br />
                    <input className='new-listing-input' type='text' id='description' placeholder='Description' value={this.state.description} onChange={this.handleChange} />
                    <br />
                    <input className='new-listing-input' type='text' id='hours' placeholder='Hours Ex: 10:00AM-10:00PM' value={this.state.hours} onChange={this.handleChange} />
                    <br />
                    <input className='new-listing-input' type='text' id='address' placeholder='address' value={this.state.address} onChange={this.handleChange} />
                    <br />
                    <input type='submit' />
                </form>

            </div>
        )
    }
}

export default AddNewListing

