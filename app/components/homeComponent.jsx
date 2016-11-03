'use strict'

import React from 'react';
import SidebarContainer from '../containers/sidebarContainer';
import NavbarContainer from '../containers/navbarContainer';
import AllproductsContainer from '../containers/allproductsContainer';

export default () => {
    return (
        <div className="container">
          <div className="row">
            <NavbarContainer/>
            <div className="row">
              <div className='col-md-2'>
                <SidebarContainer/>
              </div>
              <div className='col-md-10'>
                <AllproductsContainer/>
              </div>
            </div>
          </div>
        </div>
    )
}
