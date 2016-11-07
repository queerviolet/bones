import React from 'react';
import NavbarContainer from './navbar/NavbarContainer'

// Material theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

export default ({ children }) => (
    <MuiThemeProvider>
      <div id="app">
        <NavbarContainer />
        <div className="container content">
          { children }
        </div>
      </div>
    </MuiThemeProvider>
);
