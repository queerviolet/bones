import React from 'react';
import { Link, Router } from 'react-router';

/*
The navbar component will render a basic navbar
Navbar has:
  - a home button that links to the homepage
  - a search bar to find items by name
  - a cart button that links to the cart
*/

export default class NavbarComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }



  // When a user inputs text in the searchbar, save to the state
  handleOnChange(event){
    console.log(event.target.value);
    this.setState({searchText: event.target.value});
  }
  // When a user submits on the searchbar, it will fire an event to search for a product
  handleOnSubmit(event){
    event.preventDefault();
    console.log('submitting an event', this.state.searchText);
    console.log(Router);
    this.props.onSubmitName(this.state.searchText);
  }

  render(){
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <Link to="cart" id="cart" className="btn" data-placement="bottom" title="Ready to Buy?" >
          <span className="glyphicon glyphicon-shopping-cart"></span>
        </Link>
        <div className="container">
          <div className="navbar-header">
            <Link to={"/"}className="navbar-brand">CodeCommerce</Link>
            <Link to={"/login"}className="nav navbar navbar-right">Login</Link>
            <form className="navbar-form navbar-left" role="search" onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" 
                  placeholder="BST, loops, etc..." onChange={this.handleOnChange}></input>
              </div>
              <button type="submit" className="btn btn-default">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

