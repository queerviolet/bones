'use strict'

import React from 'react';

export default class ProductAddingComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {

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
        <div className="product-add-component">
        </div>
    }
}