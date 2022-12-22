import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
            <h1>Hi i'm the login page</h1>
            <img src="https://m.media-amazon.com/images/I/41GNrhBwBPL._AC_.jpg" alt="spotify logo" /> 
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
} 

export default Login;