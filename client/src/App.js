import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
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
import StoreDetails from './components/StoresDetails';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();



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

  //   const history = useHistory()

  //   const handleChange = (e) => {
  //     props.newUser({[e.target.name]: e.target.value})
  //   }

  //   const handleLogIn = (e) => {
  //     e.preventDefault()
  //     props.logIn()
  //     props.getUser()
  //   }

  //   const handleSignUp = (e) => {
  //     e.preventDefault()
  //     history.push('/')
  //     props.takeNewUser(props.userState.newUser)
  //   }

  return (
    <div>

      <Router history={history}>

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/Stores">
            <StoreDetails />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App