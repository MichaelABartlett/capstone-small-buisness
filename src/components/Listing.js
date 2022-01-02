import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'


const Listing = ({ listing }) => {
    return (
        <div className="listing-container">
            {listing.map((singleListing, idx) => (
                <Card key={idx} className="listing-card"  >
                    <CardContent className="text-gray" >
                        <span>{singleListing.name.toUpperCase()}</span>
                        <ul>
                        <li>Name: {singleListing["name"]}</li>
                        <li>Description: {singleListing["description"]}</li>
                        <li>Hours: {singleListing["hours"]}</li>
                        <li>Address: {singleListing["address"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/singleListing/${singleListing.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Listing