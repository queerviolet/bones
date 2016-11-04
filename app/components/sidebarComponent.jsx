'use strict'

import React from 'react'
import { Link } from 'react-router';

export default ({ categories }) => {
    return (
        <div className="sidebar-container col-md-2">
            <div id="wrapper">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        {
                            categories && categories.map((category, index) => {
                                return (
                                    <Link to={"/products/category/" + category.id}key={`category-${index}`}>
                                        <li className="categoryLinks">{category.name}</li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
