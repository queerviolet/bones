import React from 'react'


export const Login = ({ login }) => (
  <div className="container">
    <div className="wrapper">
      <form className="form-signin" onSubmit={evt => {
        evt.preventDefault()
        login(evt.target.username.value, evt.target.password.value)
      } }>
        <h3 className="form-signin-heading">Welcome! Please Sign In</h3>
        <hr className="colorgraph"></hr>
        <input type="text" className="form-control" name="username" placeholder="Username"/>
        <input name="password" className="form-control" type="password" placeholder="Password"/>
        <button className="btn btn-lg btn-primary btn-block" type="Submit" value="Login">Login</button>
      </form>
    </div>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
