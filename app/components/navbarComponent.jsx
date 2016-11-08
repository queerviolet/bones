import React from 'react';
import { Link, Router } from 'react-router';
import sidebarComponent from './sidebarComponent';

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
    this.setState({searchText: event.target.value});
  }
  // When a user submits on the searchbar, it will fire an event to search for a product
  handleOnSubmit(event){
    event.preventDefault();
    this.props.onSubmitName(this.state.searchText);
    document.getElementById("search-form").reset();
  }

  render(){
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/*<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories <span className="caret"></span>
              <ul className="dropdown-menu">
                <sidebarComponent />
              </ul>
            </button>*/}
            <Link to={"/"} className="navbar-brand">CodeCommerce</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to={"/signup"}className="nav navbar navbar-right">Signup</Link>
              </li>
              <li>
                <Link to={"/login"}className="nav navbar navbar-right">Login</Link>
              </li>
            </ul>
          </div>
          <Link to="cart" id="cart" className="btn" data-placement="bottom" title="Ready to Buy?" >
                        <span className="glyphicon glyphicon-shopping-cart"></span>
                      </Link>
        </div>
      </nav>
    );
  }
}
