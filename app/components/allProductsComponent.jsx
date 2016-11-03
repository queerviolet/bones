import React from 'react';
import { Link } from 'react-router';


export default ({props, products}) => (

        <div className="row text-center">
          {
            products && products.map((product, index) => {
              return (
                <div className="col-md-3 col-sm-6 product-boxes" key={`${index}`}>
                    <div className="thumbnail">
                        <img src="http://placehold.it/800x500" alt=""/>
                        <div className="caption">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            <p>
                                <a href="#" className="btn btn-primary">Add to Cart!</a> <a href="#" className="btn btn-default">More Info</a>
                            </p>
                        </div>
                    </div>
                </div>
              )
            })
          }
        </div>
);

