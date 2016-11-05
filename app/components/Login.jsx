import React from 'react'
import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'


export const Login = ({ login }) => (
  <div className="container">
    <div className="wrapper">
      <form className="form-signin" onSubmit={event => {
        event.preventDefault()
        // console.log(event.target.username.value, event.target.password.value)
        login(event.target.username.value, event.target.password.value)
      } }>
        <h3 className="form-signin-heading">Welcome! Please Sign In</h3>
        <hr className="colorgraph"></hr>
        <input className="form-control" name="username" placeholder="Username"/>
        <input className="form-control" name="password" type="password" placeholder="Password" />
        <input className="btn btn-lg btn-primary btn-block" type="submit" value="Login"></input>
      </form>
    </div>
  </div>
)


export default connect (
  state => ({}),
  {login},
) (Login)
