'use strict'

import React from 'react';

export default class ProductAddingComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            price: 0,
            quantity: 0,
            photoUrl: '',
            isDigitalShip: false,
            categories: ''
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleChange(property, event){
        this.setState({[property]: event.target.value});
    }

    onHandleSubmit(event){
        event.preventDefault();
    }

    render(){
        return (
            <div className="product-add-component">
                <form className="product-add-form">
                    <div className="product-title-container">
                        <label>Product Title</label>
                        <input type="title-input" className="add-input" 
                            name="title" onChange={(event) => {this.onHandleChange('title', event)}}
                            id="title-input-id" placeholder="Title"></input>
                    </div>
                    <div className="product-desc-container">
                        <label>Product Description</label>
                        <input type="desc-input" className="add-input"
                            name="desc" onChange={(event) => {this.onHandleChange('description', event)}}
                            id="desc-input-id" placeholder="Description"></input>
                    </div>
                    <div className="product-price-container">
                        <label>Product Price</label>
                        <input type="price-input" className="add-input" 
                            name="price" onChange={(event) => {this.onHandleChange('price', event)}}
                            id="price-input-id" placeholder="Price"></input>
                    </div>
                    <div className="product-qty-container">
                        <label>Product Quantity</label>
                        <input type="qty-input" className="add-input" 
                            name="qty" onChange={(event) => {this.onHandleChange('quantity', event)}}
                            id="qty-input-id" placeholder="Quantity"></input>
                    </div>
                    <div className="product-img-container">
                        <label>Product Photo URL</label>
                        <input type="img-input" className="add-input" 
                            name="img" onChange={(event) => {this.onHandleChange('photoURL', event)}}
                            id="img-input-id" placeholder="Photo URL"></input>
                    </div>
                    <div className="product-digital-container">
                        <label>Product Digital Shipping</label>
                        <input type="digital-input" className="add-input" 
                            name="digital" onChange={(event) => {this.onHandleChange('isDigitalShip', event)}}
                            id="digital-input-id" placeholder="Digital Shipping?"></input>
                    </div>
                    <div className="product-categories-container">
                        <label>Product Categories</label>
                        <input type="categories-input" className="add-input" 
                            name="categories" onChange={(event) => {this.onHandleChange('categories', event)}}
                            id="categories-input-id" placeholder="Categories"></input>
                    </div>
                    <button type="submit" className="btn btn-default">Add Product</button>
                </form>
            </div>
        );
    }
}