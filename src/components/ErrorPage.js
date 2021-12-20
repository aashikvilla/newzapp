import React from 'react'
import {NavLink} from'react-router-dom';

function ErrorPage() {
    return (
        <div>
            <center>
                <img src="/error.png" alt="error" width="400px"/>
            
            <h1>We are unable to find the page you are looking for.<br/>
            <NavLink to="/"> Click here </NavLink>to go back to home.</h1>        
            </center>   
        </div>
    )
}

export default ErrorPage
