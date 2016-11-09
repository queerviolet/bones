import React from 'react';
import { Link } from 'react-router'

// Material theme
import {ToolbarGroup} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import { white } from 'material-ui/styles/colors';

// Material CSS rules
const buttonText = {color: white, padding: 0, transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'}

export default ({ role, logout }) => (
      <ToolbarGroup style={{float: 'right'}}>
      {
        // /admin
        role === 3 ? (
          <div className="navbar-item">
            <Link to="/admin">
              <FlatButton
                label="Admin" labelStyle={buttonText}
                hoverColor="#2b4b91" rippleColor="#2b4b91"
              />
            </Link>
          </div>
        ) : null
      }
      {
        // /account
        role === 2 ? (
          <div className="navbar-item">
            <Link to="/account">
              <FlatButton
                label="Account" labelStyle={buttonText}
                hoverColor="#2b4b91" rippleColor="#2b4b91"
              />
            </Link>
          </div>
        ) : null
      }
      {
        // /login or /logout
        role === 1 ? (
          <div className="navbar-item">
            <Link to="/sign-in">
              <FlatButton
                label="Sign In" labelStyle={buttonText}
                hoverColor="#2b4b91" rippleColor="#2b4b91"
              />
            </Link>
          </div>
        ) : (
          <div className="navbar-item">
            <FlatButton
              label="Sign Out" labelStyle={buttonText}
              hoverColor="#00BCD4" rippleColor="#2b4b91"
              onClick={logout}
            />
          </div>
        )
      }
        <div className="navbar-item">
          <Link to="/cart">
            <FontIcon className="material-icons" color={white} hoverColor="#00BCD4">shopping_cart</FontIcon>
          </Link>
        </div>
      </ToolbarGroup>
);
