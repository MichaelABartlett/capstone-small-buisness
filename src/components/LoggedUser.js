import React from 'react'



const LoggedUser = ({user}) => {

    console.log('loggeduser props in components:', user)

    return(
        // <h3>stuff</h3>
        
        <h4 className='loggedUser'>Logged in as, {user[user.length-1].username}</h4>
    )
    
}

export default LoggedUser