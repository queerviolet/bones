import React from 'react';
import { Link } from 'react-router'

// Material theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import { black, white } from 'material-ui/styles/colors';

// Material CSS rules
const toolbarText = {color: white, padding: 0}
const buttonText = {color: white, padding: 0, transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'}
const centerText = {marginLeft: '5%'}

export default ({ userId, logout }) => (
  <Toolbar id="navbar" style={{backgroundColor: '#007281'}}>
    <ToolbarGroup>
      <div className="navbar-item">
        <Link to="/">
          <FontIcon className="material-icons" color={white} hoverColor="#00b6ce">home</FontIcon>
        </Link>
      </div>
    </ToolbarGroup>
    <ToolbarGroup style={centerText}>
      <ToolbarTitle style={toolbarText} text="JustHome" />
    </ToolbarGroup>
    {
      userId ?
      (
        <ToolbarGroup style={{float: 'right'}}>
          <div className="navbar-item">
            <Link to="/account">
              <FlatButton
                label="Account"
                labelStyle={buttonText}
                hoverColor="#007281"
                rippleColor="#007281"
              />
            </Link>
          </div>
          <div className="navbar-item">
            <FlatButton
              label="Sign Out"
              labelStyle={buttonText}
              onClick={logout}
              hoverColor="#007281"
              rippleColor="#007281"
            />
          </div>
        <div className="navbar-item">
          <Link to="/cart">
            <FontIcon className="material-icons" color={white} hoverColor="#00b6ce">shopping_cart</FontIcon>
          </Link>
        </div>
      </ToolbarGroup>
      ) :
      (
        <ToolbarGroup style={{float: 'right'}}>
          <div className="navbar-item">
            <Link to="/sign-in">
              <FlatButton
                label="Sign In"
                labelStyle={buttonText}
                hoverColor="#007281"
                rippleColor="#007281"
              />
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/cart">
              <FontIcon className="material-icons" color={white} hoverColor="#00b6ce">shopping_cart</FontIcon>
            </Link>
          </div>
        </ToolbarGroup>
      )
    }
  </Toolbar>
);
