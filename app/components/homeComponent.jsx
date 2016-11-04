'use strict'

import React from 'react';
import SidebarContainer from '../containers/sidebarContainer';
import NavbarContainer from '../containers/navbarContainer';
import AllproductsContainer from '../containers/allproductsContainer';

export default ({ props, params, onLoadCategoryProducts }) => {

  var children = React.Children.map(props.children, function (child) {
    return React.cloneElement(child, {
      props,
      params
    })
  })

  return (
    <div className="container">
      <div className="row">
        <NavbarContainer />
        <div className="row">
          <div className='col-md-2'>
            <SidebarContainer onLoadCategoryProducts={onLoadCategoryProducts}/>
          </div>
          <div className='col-md-10'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
