import React from 'react';
import { Link } from 'react-router';
var total = 0;

export default ({products, cart, addToCart}) => (
<div className="container">
  <div className="row">
    <div className="col-sm-12 col-md-10 col-md-offset-1">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th className="text-center">Price</th>
            <th className="text-center">Total</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(cart) && Object.keys(cart).map((item, index) => {
              var productId = item;
              var qty = cart[item];
              if (! products.length) {
                return;
              }
              var product = products[productId - 1];
              var price = product.price;
              var name = product.title;
              var itemTotal = +price * +qty;
              itemTotal = Math.round(itemTotal*100)/100;
              cartTotal(itemTotal);
              itemTotal = itemTotal.toString();
              var dot = itemTotal.indexOf('.');
              if (dot === -1) {
                itemTotal += '.00';
              } else {
                var arr = itemTotal.split('.');
                if (arr[1].length < 2) {
                  itemTotal += '0'
                }
              }
              return (
              <tr key={index}>
                <td className="col-sm-8 col-md-6">
                  <div className="media">
                    <a className="thumbnail pull-left" href="#"> <img className="media-object" src={product.photoUrl} style={{width: 72, height: 72}}/> </a>
                    <div className="media-body">
                      <h4 className="media-heading"><a href="#">{name}</a></h4>
                      <h5 className="media-heading"> by <a href="#">Sawgonation</a></h5>
                      <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                    </div>
                  </div></td>
                  <td className="col-sm-1 col-md-1" style={{textAlign: "center"}}>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={qty}/>
                  </td>
                  <td className="col-sm-1 col-md-1 text-center"><strong>${price}</strong></td>
                  <td className="col-sm-1 col-md-1 text-center"><strong>${itemTotal}</strong></td>
                  <td className="col-sm-1 col-md-1">
                    <button type="button" className="btn btn-danger">
                      <span className="glyphicon glyphicon-remove"></span> Remove
                    </button></td>
                  </tr>
                  );
                })

              }

              <tr>
                <td>   </td>
                <td>   </td>
                <td>   </td>
                <td><h5>Subtotal</h5></td>
                <td className="text-right"><h5><strong>{total}</strong></h5></td>
              </tr>
              <tr>
                <td>   </td>
                <td>   </td>
                <td>   </td>
                <td><h5>Estimated shipping</h5></td>
                <td className="text-right"><h5><strong>"It's free"</strong></h5></td>
              </tr>
              <tr>
                <td>   </td>
                <td>   </td>
                <td>   </td>
                <td><h3>Total</h3></td>
                <td className="text-right"><h3><strong>{total}</strong></h3></td>
              </tr>
              <tr>
                <td>   </td>
                <td>   </td>
                <td>   </td>
                <td>
                  <button type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                  </button></td>
                  <td>
                    <button type="button" className="btn btn-success">
                      Checkout <span className="glyphicon glyphicon-play"></span>
                    </button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        );

function cartTotal (price) {
  total += +price;
  console.log('total ', total);
}
