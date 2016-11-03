'use strict'

import React from 'react';
import SidebarContainer from '../containers/sidebarContainer';
import NavbarContainer from '../containers/navbarContainer';

export default () => {
    return (
        <div className="home-container">
          <NavbarContainer/>
            <SidebarContainer/>
        </div>
    )
}
