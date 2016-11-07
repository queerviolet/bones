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
    }

    componentWillMount() {
        if(this.props.props.params.categoryId){
            this.props.onLoadCategoryProducts(this.props.props.params.categoryId);            
        } else if(this.props.props.params.productName){
            this.props.onLoadNamedProducts(this.props.props.params.productName);             
        }
    }

    render() {
        const selectedProducts = this.props.selectedProducts;
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
