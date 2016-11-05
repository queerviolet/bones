'use strict'

import React from 'react'
import { Link } from 'react-router';

/* 
The sidebar component will render out a sidebar with the different categories of products.
*/

export default ({ categories, onLoadCategoryProducts }) => {
    return (
        <div className="sidebar-container col-md-2">
            <div id="wrapper">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        {
                            categories && categories.map((category, index) => {
                                return (
                                    <Link to={"/products/category/" + category.id}
                                    key={`category-${index}`}
                                    onClick={() => {onLoadCategoryProducts(category.id)}}>
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
