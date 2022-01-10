import React from 'react'
import { Container, } from '@material-ui/core';
import GoogleMapImg from '../containers/GoogleMap';


const BizDetails = (props) => {
    const { listing } = props;
    const id = props.match.params.id
    const aListing = listing.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
            <div>
                <div>
                    <h1>{aListing.name}</h1>
                    <h2>{aListing.address}</h2>
                    <h2>{aListing.hours}</h2>
                    <h3>{aListing.description}</h3>
                </div>
                <div>
                    <GoogleMapImg aListing={aListing} />
                </div>
            </div>
        </Container>

    )
}

export default BizDetails