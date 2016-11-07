import React from 'react'
import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
import { Link } from 'react-router'


export const Signup = ({ signup }) => (
  <div className="container">
    <div className="wrapper">
      <form className="form-signin">
        <h3 className="form-signin-heading">Welcome to Swag-Store! Please Sign Up</h3>
        <hr className="colorgraph"></hr>
        <input className="form-control" name="first name" placeholder="First Name"/>
         <input className="form-control" name="last name" placeholder="Last Name"/>
         <input className="form-control" name="email" placeholder="Email Address"/>
         
        <input className="form-control" name="password" type="password" placeholder="Password" />
        <input className="form-control" name="password" type="password" placeholder="Retype-Password" />

        <input className="btn btn-lg btn-primary btn-block" type="submit" value="Sign Up"></input>
         <input className="btn btn-lg btn-primary btn-block"  value="Signup with Facebook"></input>
          <input className="btn btn-lg btn-primary btn-block"  value="Signup with Google+"></input>
      </form>
    </div>
  </div>
)


export default connect (
  state => ({}),
  {signup},
) (Signup)


// <body>
//   <form class="sign-up">
//     <h1 class="sign-up-title">Sign up in seconds</h1>
//     <input type="text" class="sign-up-input" placeholder="What's your username?" autofocus>
//     <input type="password" class="sign-up-input" placeholder="Choose a password">
//     <input type="submit" value="Sign me up!" class="sign-up-button">
//   </form>
