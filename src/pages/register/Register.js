import React from 'react'
import logo from '../login/login.gif'
import "./register.css"

const Register = () => {
    return (
        <div className='loginContainer'>
            
                 
            <div className='left'>
                <img src={logo} alt='' />
            </div>
            <div className='right'>
                <div class="rightTitle">
                    SocialSquare
                </div>
                <div className='loginBox'>
                    <input className='loginInput' placeholder='Email'/>
                    <input className='loginInput' placeholder='Password'/>
                    <button className='loginButton'>Signup</button>
                    <button className='loginRegisterButton'>Login to your account</button>
                </div>
            </div>
        </div>
    )
}

export default Register