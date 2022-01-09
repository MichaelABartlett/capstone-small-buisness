import React from 'react'

import cookie from 'cookie'


const GoogleMap = (props) => {
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
            <h2>Inside google map page</h2>
        </div>
    )
}


export default GoogleMap
