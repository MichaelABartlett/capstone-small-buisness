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


const AdminView = (props) => {
    const { listing , user } = props;
    // console.log('listing: ', listing)
    // console.log('user: ', user)
    return (
        <Container maxWidth="lg" className="car-container">
            
            <h4>Welcome, {props.user[0].username}</h4>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Delete</TableCell>
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
                        <TableCell>
                            <DeleteIcon
                                onClick={() => {props.removeListing(idx)}}
                                className="icon text-red" />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}


export default AdminView

