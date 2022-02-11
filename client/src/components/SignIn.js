import React from 'react'
import { Link } from 'react-router-dom'




const SignIn = (props) => {
  

    return (
        <div id='sign-page-s'>
            <div id='sign-page-s'>
                <h4 id='sign-page-s'>Sign in here</h4>
            </div>
            <div>
                <form id='sign-page-s'>
                    <div id='sign-page-s'>
                        <input
                        type='text'
                        placeholder='Email'
                        id='sign-input'
                        />
                    </div>
                    <div id='sign-page-s'>
                        <input 
                        type='text'
                        placeholder='Username'
                        id='sign-input'
                        />
                    </div>
                    <button onClick={props.handleLogIn}> Submit </button>
                </form>
            </div>
            <div id='sign-page-s'>
                Dont have an account? SignUp <Link to='/sign-up' id='sign-here'>here</Link>
            </div>
        </div>
    )
}

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
export default SignIn