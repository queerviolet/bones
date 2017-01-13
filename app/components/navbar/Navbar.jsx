import React, { Component } from 'react';
import { AppBar, FlatButton, Toolbar, ToolbarGroup, TextField, ToolbarTitle, FontIcon, Popover, Menu, MenuItem } from 'material-ui';
import NavbarMenu from './NavbarMenu';
import { Link, IndexLink } from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
        <Toolbar style={{backgroundColor:'#020202'}}>
          <ToolbarGroup>
            <i className="material-icons" style={{color:'white'}}>shop</i>

            <ToolbarGroup>
              <IndexLink to='/'><FontIcon color='white'>Rockstarz </FontIcon></IndexLink>
            </ToolbarGroup>

            <ToolbarGroup>
              <Link to={'/rocks/categories/companion'}>
                <FlatButton label="Companion" style={{color:'white'}}></FlatButton>
              </Link>
              <Link to={'/rocks/categories/utility'}>
                <FlatButton label="Utility" style={{color:'white'}}></FlatButton>
              </Link>
              <Link to={'/rocks/categories/decorative'}>
                <FlatButton label="Decorative" style={{color:'white'}} ></FlatButton>
              </Link>
              <Link to={'/rocks/categories/miscellaneous'}>
                <FlatButton label="Miscellaneous" style={{color:'white'}}></FlatButton>
              </Link>
            </ToolbarGroup>

          </ToolbarGroup>
          <ToolbarGroup>
            <NavbarMenu />
          </ToolbarGroup>
        </Toolbar>

    )
  }
}