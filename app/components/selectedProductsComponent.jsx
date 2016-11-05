'use stict'

import React from 'react';

/*
The selected products component will render out the select components from a search or filter
    - This component loads in item baseds on a search, or filter
	- The component mount gets the product through param(link) or selection
*/

export default class SelectedProductsComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    componentWillMount() {
        const products = this.props.products;
        const categoryId = this.props.props.params.categoryId;
        if (products && products.length > 0) {
            this.state.selectedProducts = products.find(product => product.id === productId)
        } else {
            this.props.onLoadCategoryProducts(categoryId);
        }
    }

    render() {
        const selectedProducts = this.props.selectedProducts;
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
