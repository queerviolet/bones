import React from 'react';
import { Link } from 'react-router';
import { TextField, RaisedButton, GridList, GridTile} from 'material-ui';

export default({auth, defaultAddress, cartCheckoutOrder, cartProducts }) => {

  return(

    <div>
    {
      <form>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <TextField floatingLabelText="Street" defaultValue= {defaultAddress ? defaultAddress.street: ""} ></TextField><br />
              <TextField floatingLabelText="City" defaultValue= {defaultAddress ? defaultAddress.city: ""} /> <br />
              <TextField floatingLabelText="State" defaultValue= {defaultAddress ? defaultAddress.state: ""} /><br />
              <TextField floatingLabelText="Zip Code" defaultValue= {defaultAddress ? defaultAddress.zipcode: ""} /><br />
            </div>
            <div className="col-md-4">
              <TextField name="name" floatingLabelText="Name on card" /><br />
              <TextField name="card-number" floatingLabelText="Card Number" /><br />
              <TextField name="expiration-date" floatingLabelText="Expiration Date" hintText="MM/YYYY" /><br />
              <TextField name="cv-code" floatingLabelText="Security Code" /><br />
              <RaisedButton style={{align:'center'}} label="Checkout" primary={true} type="submit" onClick={() => cartCheckoutOrder(auth.id)} />
          </div>
          </div>
        </div>
      </form>
    }
    </div>
  )

};