'use strict'

import React from 'react'
import { Link } from 'react-router';

/*
The sidebar component will render out a sidebar with the different categories of products.
*/

export default ({ categories, onLoadCategoryProducts }) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <p className="lead">Categories</p>
                <div className="list-group">
                    {
                        categories && categories.map((category, index) => {
                            return (
                                <Link to={"/products/category/" + category.id} key={`category-${index}`} onClick={() => {onLoadCategoryProducts(category.id)}}>
                                    <li className="list-group-item">{category.name}</li>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
