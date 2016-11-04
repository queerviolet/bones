'use stict'

import React from 'react';
import axios from 'axios';

export default class SelectedProductsComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    componentWillMount() {
        const products = this.props.products;
        const productId = this.props.props.params.id;
        if (products && products.length > 0) {
            this.state.selectedProducts = products.find(product => product.id === productId)
        } else {
            this.props.onLoadSelectedProducts(productId);
        }
    }

    render() {
        const selectedProducts = this.state.selectedProducts;
        console.log('selected render', selectedProducts);
        return (
            <div className="selected-products-container">
                {
                    selectedProducts && selectedProducts.map((product, index) => {
                        return (
                            <div className="selected-product" key={`${index}`}>
                                <img src={product.photoUrl} alt="" />
                                <div>{product.title}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
