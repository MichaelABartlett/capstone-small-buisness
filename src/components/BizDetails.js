import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';


const BizDetails = (props) => {
    const { listing } = props;
    const id = props.match.params.id
    {/* Change cars to props.cars and remove the cars.json import above */}
    const aListing = listing.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{aListing.Name}</h2>
                {
                    Object.keys(aListing).map((key, idx) => {
                        return <Chip label={`${key}: ${aListing[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default BizDetails