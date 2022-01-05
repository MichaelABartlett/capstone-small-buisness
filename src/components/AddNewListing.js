import React, { Component } from 'react'

class AddNewListing extends Component {
    constructor(props){
        super(props)

        this.state = {
            open : '',
            name : '',
            description : '',
            hours : '',
            address : ''
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
        payload.id = (this.props.listing.length + 1)
        delete payload.open
        console.log("THE LISTING", payload)
        this.props.addListing(payload)

    }

    render () {
        console.log('props.listing: ', this.props.listing)
        console.log('props.user: ',this.props.user)
        return (
            <div className='add-listing-page' >
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

                {/* <input id="name" placeholder='Name'/>
                <br/>
                <input id="address" placeholder='Description'/>
                <br/>
                <input id="hours (ex. 10:00AM - 10:00PM" placeholder='Hours'/>
                <br/>
                <input id="description" placeholder='Description'/>
                <br/>
                <button onClick={() => {this.props.addListing()}}>Save</button> */}
            </div>
        )
    }
}

export default AddNewListing

