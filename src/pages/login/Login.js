import React from 'react'
import logo from './login.gif'
import "./login.css"

const Login = () => {
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
                    <button className='loginButton'>Login</button>
                    <span className='loginForgot'>Forgot Password?</span>
                    <button className='loginRegisterButton'>Create new account</button>
                </div>
            </div>
        </div>
    )
}

export default Login