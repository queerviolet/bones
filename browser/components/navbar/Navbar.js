import React from 'react';
import { Link } from 'react-router'
import NavbarMenu from './NavbarMenu'

// Material theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import { white } from 'material-ui/styles/colors';

// Material CSS rules
const toolbarText = {color: white, padding: 0}
const centerText = {marginLeft: '5%'}

export default (props) => (
  <Toolbar id="navbar" style={{backgroundColor: '#007281'}}>
    <ToolbarGroup>
      <div className="navbar-item">
        <Link to="/">
          <FontIcon className="material-icons" color={white} hoverColor="#00b6ce">home</FontIcon>
        </Link>
      </div>
    </ToolbarGroup>
    <ToolbarGroup style={centerText}>
      <Link to="/">
        <ToolbarTitle style={toolbarText} text="JustHome" />
      </Link>
    </ToolbarGroup>
    <NavbarMenu { ...props } />
  </Toolbar>
);
