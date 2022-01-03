import React, { Component } from 'react'
import { addListing } from '../redux/actions'

class AddNewListing extends Component {
    constructor(props){
        super(props)

        this.state = {
            open : "",
            name : "",
            description : "",
            hours : "",
            address : ""
        }
    }

    // handleChange = (e) => {
    //     this.setState({
    //         newListing : e.target.value
    //     })
    // }

    handleChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }


    handleSubmit = (e) => {
        e.preventDefault()

        // this.props.addListing(this.state.newListing)

        const payload = { ...this.state }
        payload.id = this.props.Total + 1
        delete payload.open
        console.log("THE LISTING", payload)
        console.log(addListing)
        addListing(payload)

        // this.setState({
        //     newListing : ""
        // })
    }

    render () {
        return (
            <div >
                <h2>Add a new listing</h2>

                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type='text' value={this.state.newListing} onChange={e => this.handleChange(e)} />
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

