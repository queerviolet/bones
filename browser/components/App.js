import React from 'react';

// Material theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Tabs, Tab } from 'material-ui'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import {black, white, blueGrey500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

const toolbarStyle = {backgroundColor: blueGrey500}
const toolbarText = {color: white}
const buttonText = {color: white}
const centerText = {marginLeft: '45%'}
const seperator = {backgroundColor: black, marginLeft: 'none'}

export default ({ children }) => (
    <MuiThemeProvider>
      <div id="app">
        <Toolbar style={toolbarStyle}>
            <ToolbarGroup style={centerText}>
              <ToolbarTitle style={toolbarText} text="JustHome" />
            </ToolbarGroup>
            <ToolbarGroup float="right" >
              <FlatButton style={buttonText} label="Sign In" />
              <ToolbarSeparator style={seperator} />
              <FontIcon className="material-icons" color={white} hoverColor={black} >shopping_cart</FontIcon>
            </ToolbarGroup>
          </Toolbar>   
        <div className="container content">
          { children }
        </div>
      </div>
    </MuiThemeProvider>
);
