import React, { Component } from 'react';
import { AppBar, FlatButton, Toolbar, ToolbarGroup, TextField, ToolbarTitle, FontIcon, Popover, Menu, MenuItem } from 'material-ui';
import NavbarMenu from './NavbarMenu';
import { Link, IndexLink } from 'react-router';

export default class Navbar extends Component {
  render() {

    return (

      <nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to='/' className="navbar-brand">Rockstarz</IndexLink>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav navbar-left">
              <li></li>
              <li ><Link to={'/rocks/categories/companion'}>Companion</Link></li>
              <li><Link to={'/rocks/categories/utility'}>Utility</Link></li>
              <li><Link to={'/rocks/categories/decorative'}>Decorative</Link></li>
              <li> <Link to={'/rocks/categories/miscellaneous'}>Miscellaneous</Link></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <form className="navbar-form" role="search">
                  <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term" />
                      <div className="input-group-btn">
                          <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                      </div>
                  </div>
                </form>
              </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to='/login'>Sign in</Link></li>
                  </ul>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}