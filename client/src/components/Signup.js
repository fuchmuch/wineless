import React from "react";
import { Link } from 'react-router-dom'




const SignUp = (props) => {


    return (
        <div id='sign-page-s'>
            <div>
                <h4 id='sign-page-s'>Sign up here</h4>
            </div>
            <div>
                <form id='sign-page-s'>
                    <div id='sign-page-s'>
                        <input
                        type='text'
                        name="name"
                        value={props.userName}
                        placeholder='Username'
                        onChange={props.handleChange}
                        id='sign-input'
                        />
                    </div>
                    <div id='sign-page-s'>
                        <input 
                        type='text'
                        name="email"
                        value={props.email}
                        placeholder='Email'
                        onChange={props.handleChange}
                        id='sign-input'
                        />
                    </div>
                    <button onClick={props.handleSignUp}> Submit </button>
                </form>
            </div>
            <div id='sign-page-s'>
                Already have an account? SignIn <Link to='/' id='sign-here'>here</Link>
            </div>
        </div>
    )
}


export default SignUp