'use strict'

import React from 'react'

export default ({ categories }) => {
    return (
        <div className="sidebar-container col-md-2">
            <div id="wrapper">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        {
                            categories && categories.map((category, index) => {
                                return (
                                    <li key={`category-${index}`} className="categoryLinks">{category.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
