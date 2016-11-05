import React from 'react';
import { Link } from 'react-router'

// Material theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import {black, white, blueGrey500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

// Material CSS rules
const toolbarText = {color: white, padding: 0}
const buttonText = {color: white, padding: 0, transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'}
const centerText = {marginLeft: '45%'}

export default ({ children }) => (
    <MuiThemeProvider>
      <div id="app">
        <Toolbar id="navbar" style={{backgroundColor: '#007281'}}>
            <ToolbarGroup style={centerText}>
              <Link to="/">
                <ToolbarTitle style={toolbarText} text="JustHome" />
              </Link>
            </ToolbarGroup>
            <ToolbarGroup style={{float: 'right'}}>
              <div className="navbar-item">
                <Link to="/sign-in">
                  <FlatButton labelStyle={buttonText} hoverColor="#007281" rippleColor="#007281" label="Sign In" />
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/cart">
                  <FontIcon className="material-icons" color={white} hoverColor="#00b6ce">shopping_cart</FontIcon>
                </Link>
              </div>
            </ToolbarGroup>
          </Toolbar>   
        <div className="container content">
          { children }
        </div>
      </div>
    </MuiThemeProvider>
);
