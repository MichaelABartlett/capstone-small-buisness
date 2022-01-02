import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Liberty Hill Small Buisness
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listing</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/sign-in">Login</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/admin-view">Admin View</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/add-new-listing">Add New Listing</Link>
                    </li>
                    <li className="nav-list-item"
                        onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/")
                        }}>
                        Logout
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation
