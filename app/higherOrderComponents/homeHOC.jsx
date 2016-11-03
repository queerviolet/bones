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
            }

            render () {
                return (
                    <HomeComponent categories={this.props.categories}/>
                );
            }
        }
    )
}

export default createHomeHOC(homeComponent);