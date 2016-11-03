import React, {Component} from 'react'
import store from '../store';
import axios from 'axios';
export class User extends Component {

  constructor() {
    super()
    //this.state = store.getState();
      this.state = {
                    firstName:"fake firstName",
                    lastName:"fake lastName",
                    username:"fakeusename",
                    email:"fake@email",
                    password:"fakepassword",
                    id:1}

    this.update = this.update.bind(this);

  }
  componentWillMount () {
      store.subscribe(() => this.setState(store.getState()));
  }
  update( firstName, lastName, username, email, password){
    //var url = `/api/users/${id}`;
    var user = {firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password
              }
    console.log("click", user);
    // axios.get('/api/users')
    // .then(function(res){
    //   return res.json();
    // })
    // .then(function(res){
    //   console.log("RES", res);
    // })
    // .catch(function (err) {
    //   console.error("ERR",err)
    // });
    axios.put('/api/users/1', user)
    .then(function(res){
      console.log("RES",res);
      if(res.status ==200){
        location.reload();
      }
    })
    .catch(function (err) {
      console.error("ERR",err)
    });

  }

  render() {
  return (

    <form  onSubmit = {evt=>{ evt.preventDefault(); this.update(evt.target.firstname.value, evt.target.lastname.value, evt.target.username.value, evt.target.email.value, evt.target.password.value);}}>
      <p>First Name: <input type="text"  defaultValue = {this.state.firstName} name="firstname"/></p>
      <p>Last Name: <input type="text"  defaultValue = {this.state.lastName} name="lastname"/></p>
      <p>Username: <input type="text"  defaultValue = {this.state.username} name="username"/></p>
      <p>Eamil: <input type="text"  defaultValue = {this.state.email} name="email"/></p>
      <p>Password: <input type="text"  defaultValue = {this.state.password} name="password"/></p>
      <button type="submit">UPDATE</button>
    </form>



)}

}

import {connect} from 'react-redux'
const mapStateToProps = ({auth, user}) => ({
  auth, user
})
export default connect (
  mapStateToProps,
  null,
) (User)

