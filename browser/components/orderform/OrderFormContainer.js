import React from'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import {green500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin'


export default class OrderForm extends React.Component {
  constructor(props) {
      super(props) 
      this.state = {
        value: 1,
      }
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event, index, value){this.setState({value})};

  render() {
    
    return (

      <div id="form" className="col-xs-12">
      
      <TextField
        hintText="First Name"
        floatingLabelText="First Name"
        fullWidth={true}
        /><br />

      <TextField
        hintText="Last Name"
        floatingLabelText="Last Name"
        fullWidth={true}
        /><br />

      <TextField
          floatingLabelText="Shipping Address:"
          fullWidth={true}
          /><br />

      <TextField
          floatingLabelText="Shipping Address:"
          fullWidth={true}
          /><br />

      <div id="City" className="col-xs-12 col-md-6">
      <TextField
          floatingLabelText="City"
          fullWidth={true}
          /><br />
      </div>

      <div id="State" className="col-xs-4 col-md-3">
      <TextField
          floatingLabelText="State"
          fullWidth={true}
          /><br />
      </div>

      <div id="Zip" className="col-xs-8 col-md-3">
      <TextField
          floatingLabelText="Zip"
          fullWidth={true}
          /><br />
      </div>

      <div id="CCType" className="col-xs-12 col-md-3">
       <SelectField
            floatingLabelText="Payment Type"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Visa" />
            <MenuItem value={2} primaryText="American Express" />
            <MenuItem value={3} primaryText="MasterCard" />
            <MenuItem value={4} primaryText="BitCoin" />
        </SelectField>
      </div>

      <div id="CC" className="col-xs-12 col-md-3">
      <TextField
          floatingLabelText="Card Number"
          fullWidth={true}
          /><br />
      </div>

      <div id="Expir" className="col-xs-12 col-md-4">
      <TextField
          floatingLabelText="Expiration Date"
          fullWidth={true}
          /><br />
      </div>

      <div id="CV" className="col-xs-12 col-md-2">
      <TextField
          floatingLabelText="CV Code"
          fullWidth={true}
          /><br />
      </div>

      <TextField
        hintText="Optional"
        floatingLabelText="Optional"
        fullWidth={true}
        />

      <div id="submitButton" className="col-xs-12">
      <RaisedButton label="Submit" fullWidth={true} backgroundColor={green500} />
      </div>

      </div>

    	)
    };
  }
