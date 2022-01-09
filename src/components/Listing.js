import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import cookie from 'cookie'
import LoggedUser from '../containers/LoggedUser'


const Listing = (props) => {
    const { listing , user } = props;

    console.log('cookie: ', cookie.parse(document.cookie))
    console.log('listing: ', listing)
    console.log('user: ', user)
    console.log('listing props: ' , props)

    const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

    console.log('LoggedIn cookie', cookies.loggedIn)


    return (
        
        <div>
            <div>
                {cookies.loggedIn ? <LoggedUser/> : null}
            </div>
            <Container maxWidth="lg" className="car-container">
                
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Hours</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>{cookies.loggedIn ? "Delete" : ""}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {listing.map((singleListing, idx) => (
                        <TableRow key={singleListing.id}>
                            <TableCell component="th" scope="row">
                                <Link to={`/singleListing/${singleListing.id}`}>
                                    {singleListing["name"]}
                                </Link>
                            </TableCell>
                            <TableCell>{singleListing["description"]}</TableCell>
                            <TableCell>{singleListing["hours"]}</TableCell>
                            <TableCell>{singleListing["address"]}</TableCell>
                            <TableCell>{cookies.loggedIn ? <DeleteIcon
                                    onClick={() => {props.removeListing(idx)}}
                                    className="icon text-red" /> : null }
                                
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Container>
        </div>
    )
}


export default Listing
