'use strict'

import React from 'react'

export default ({ categories }) => {
    console.log(categories);
    return (
        <div className="sidebar-container">
            <div id="wrapper">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav"> Categories
                        {
                            categories && categories.map((category, index) => {
                                return (
                                    <li key={`category-${index}`}>{category.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}