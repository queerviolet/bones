import React from 'react';
import { Link } from 'react-router';

/*
This component is a stateless component rendering all the products
- User for the landing page to get view all the products
*/

export default ({products, addToCart, cart}) => (

    <div className="row text-center">
      {
        // checkoutLocalStorage(cart);
        products && products.map((product, index) => {
          return (
            <div key={`${index}`} className="col-md-3 col-sm-6 product-boxes">
                <div className="thumbnail">
                    <img src={product.photoUrl} alt=""/>
                    <div className="caption">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <p>
                            <a onClick={(e) => {e.preventDefault(); addToCart(product.id, 1);}} href="#" className="btn btn-primary">Add To Cart!</a>
                            <Link to={"/products/" + product.id} className="btn btn-default">More Info</Link>
                        </p>
                    </div>
                </div>
            </div>
          )
        })
      }
    </div>
);
