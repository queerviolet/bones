'use strict'

import React from 'react';
import SidebarContainer from '../containers/sidebarContainer';
import NavbarContainer from '../containers/navbarContainer';
import AllproductsContainer from '../containers/allproductsContainer';

/*
The home component is a parent container that will render:
Navbar, Sidebar, and a child that changes depending on the path
 - React.children.map is added here in order to pass down props and params to children
  - This is done so that anything passed in as a prop/param can be used in the children
  - Example is in selectedProductsComponents that needs a categoryId
*/
export default ({ props, params, onLoadCategoryProducts }) => {

  //This is done so that anything passed in as a prop/param can be used in the children
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
