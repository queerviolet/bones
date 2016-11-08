import React from 'react';
import { Link } from 'react-router';

/*
This component is a stateless component rendering all the products
- User for the landing page to get view all the products
*/

export default ({products, addToCart, cart}) => (

    <div className="row">
      {
        products && products.map((product, index) => {
          return (
            <div key={`${index}`} className="col-md-4 col-sm-4 col-lg-4">
                <div className="thumbnail">
                    <img src={product.photoUrl} alt=""/>
                    <div className="caption">
                        <h4 className="pull-right">${product.price}</h4>
                        <h4><Link to={"/products/" + product.id}>{product.title}</Link></h4>
                        <p>{product.description}</p>
                        <p>
                            <a onClick={(e) => {e.preventDefault(); addToCart(product.id, 1);}} href="#" className="btn btn-primary center-block">Add To Cart!</a>
                        </p>
                    </div>
                    <div className="ratings">
                      <p className="pull-right">15 reviews</p>
                        <p>
                            <span className="glyphicon glyphicon-star"></span>
                            <span className="glyphicon glyphicon-star"></span>
                            <span className="glyphicon glyphicon-star"></span>
                            <span className="glyphicon glyphicon-empty"></span>
                            <span className="glyphicon glyphicon-empty"></span>
                        </p>
                    </div>
                </div>
            </div>
          )
        })
      }
    </div>
);
