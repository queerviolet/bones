import React from 'react';

// Material theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, Tabs, Tab } from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

export default ({ children }) => (
    <MuiThemeProvider>
      <div id="app">
        <AppBar title="JustHome" id="navbar">
          <Tabs>
            <Tab label="Sign In" />
            <Tab label="Cart" />
          </Tabs>
        </AppBar>
        <div className="container content">
          { children }
        </div>
      </div>
    </MuiThemeProvider>
);
