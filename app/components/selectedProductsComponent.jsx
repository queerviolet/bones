'use stict'

import React from 'react';
import axios from 'axios';

export default class SelectedProductsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProducts: []
        }
    }

    componentWillMount() {
        const products = this.props.products;
        const categoryId = this.props.props.params.categoryId;
        if (products && products.length > 0) {
            connsole.log('component mount', products);
            const selectedProducts = products.filter(product => {
                return product.category_id === categoryId;
            })
            this.setState({
                selectedProducts
            })
        } else {
            axios.get('/api/products')
                .then(products => {
                    const productsArray = products.data;
                    const selectedProducts = productsArray.filter(product =>
                        product.category_id === Number(categoryId)
                    )
                    this.setState({ selectedProducts });
                })
                .catch(err => console.log('Error when fetching filtered products', err));
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
                                <div>{product.title}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}