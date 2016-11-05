'use strict'

import { connect } from 'react-redux';
import navbarComponent from '../components/navbarComponent';
import { receiveNamedProductsFromServer } from '../actions/productsActions';
import { browserHistory } from 'react-router'

const mapStateToProps = (state, ownProps) => ({})

const callback = url => browserHistory.push(`${url}`)
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmitName: (name) => {
            console.log('submitted input', name);
            dispatch(receiveNamedProductsFromServer(name, callback))
        }
    };
 }

export default connect(mapStateToProps, mapDispatchToProps)(navbarComponent);
