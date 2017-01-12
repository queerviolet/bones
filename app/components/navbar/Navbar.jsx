import React, { Component } from 'react';
import { TextField } from 'material-ui';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <h1> This is Navbar </h1>
        <TextField floatingLabelText = 'email' type = 'email' />
      </div>
    )
  }
}