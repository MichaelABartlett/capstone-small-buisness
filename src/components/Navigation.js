import React from 'react'
import { AppBar, Toolbar,
    Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'




const Navigation = (props) => {

    const cookies = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

    // console.log('navigation props: ', props)
    // console.log('LoggedIn cookie in nav', cookies.loggedIn)



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
                        <Link to="/sign-in">{!cookies.loggedIn ? "Log In" : ""}</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/add-new-listing">{cookies.loggedIn ? "Add New Listing" : ""}</Link>
                    </li>
                    <li className="nav-list-item" 
                        onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/")
                        }}>
                        {cookies.loggedIn ? "Logout" : ""}
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation
