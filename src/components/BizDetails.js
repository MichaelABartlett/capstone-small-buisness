import React from 'react'
import { Container, } from '@material-ui/core';


const BizDetails = (props) => {
    const { listing } = props;
    const id = props.match.params.id
    const aListing = listing.find(c => c.id === id)

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
                    {/* google map image */}
                </div>
                {/* <Paper className="car-paper">
                    <h2>{aListing.name}</h2>
                    {
                        Object.keys(aListing).map((key, idx) => {
                            return <Chip label={`${key}: ${aListing[key]}`}></Chip>
                        })
                    }
                </Paper> */}
            </div>
        </Container>

    )
}

export default BizDetails