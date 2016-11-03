'use strict'

import React from 'react';
import homeComponent from '../components/homeComponent';

const createHomeHOC = HomeComponent => {
    return (
        class HomeHOC extends React.Component{
            constructor(props){
                super(props);
            }

            componentWillMount () {
                this.props.onLoadCategories();
                this.props.onLoadProducts(); // make this function
            }

            render () {
                return (
                    <HomeComponent categories={this.props.categories}
                                   products={this.props.products}/>
                );
            }
        }
    )
}

export default createHomeHOC(homeComponent);
