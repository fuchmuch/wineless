import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import Home from './components/Home';
// import Bill from './components/Stores';
// import NavBar from './components/NavBar';
// import Details from './components/Details';
// import Profile from './components/Profile';
// import SignUp from './components/Signup.js';
// import SignIn from './components/SignIn';
// import { LogIn, LoadUser, SendNewUser, updateNewUser } from './store/actions/UserAction';
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";



const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logIn: () => dispatch(LogIn()),
//     getUser: () => dispatch(LoadUser()),
//     takeNewUser: (postUser) => dispatch(SendNewUser(postUser)),
//     newUser: (formValue) => dispatch(updateNewUser(formValue))
//   }
// }

function App(props) {

  const history = useHistory()

  const handleChange = (e) => {
    props.newUser({[e.target.name]: e.target.value})
  }

  const handleLogIn = (e) => {
    e.preventDefault()
    props.logIn()
    props.getUser()
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    history.push('/')
    props.takeNewUser(props.userState.newUser)
  }


  return (

    <div className='body'>
      {props.userState.isLoggedin === true ?       
      <div>
        <div>
          {/* <NavBar />
        </div>
        <div className='app-body'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/stores/:id' component={Details}/>
            <Route path='/stores' component={Stores}/>
            <Route path='/profile' component={Profile}/>
          </Switch>
        </div>
      </div> 
      
      : 
      
      <div id="sign-page">
        <Switch>
          <Route exact path='/' >
            <SignIn 
              handleLogIn={handleLogIn}
            />
          </Route>
          <Route path='/sign-up'>
            <SignUp
              email={props.userState.newUser.email}
              userName={props.userState.newUser.name}
              handleChange={handleChange}
              handleSignUp={handleSignUp}
              
            />          
          </Route>
        </Switch>
      </div>}
      <div id='footer'>
        <h6>''</h6>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App) */