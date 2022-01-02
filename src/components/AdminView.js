import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';


const AdminView = (props) => {
    const { cars } = props;
    const id = props.match.params.id
    {/* Change cars to props.cars and remove the cars.json import above */}
    const car = props.cars.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
            <h2>Admin View Page</h2>
        </Container>
    )
}

export default AdminView