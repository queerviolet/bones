'use strict'

import React from 'react';
import sidebarContainer from '../containers/sidebarContainer';

export default () => {
    return (
        <div className="home-container">
            {sidebarContainer.WrappedComponent()}
        </div>
    )
}