import React, { useState } from 'react'
import './Login.css'
function Login({setShowLogin}){

    const[current, setCurrent]=useState("Sign Up")
    return( 
        <div className='Login-popup'>
           <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{current}</h2>
            </div>
           </form>
        </div>
    )
}
export default Login
