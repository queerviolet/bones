import React from 'react';
import { Link } from 'react-router';
import Address from './Address'
import CreditCard from './CreditCard'
import { TextField, SelectField, MenuItem, RaisedButton } from 'material-ui';
import { white, green500 } from 'material-ui/styles/colors';


export default ({ handleChange, handleSubmit, cardType, errors }) => {
  return (
    <div id="checkout" className="col-xs-12">
      <form onSubmit={ handleSubmit }>
        <fieldset className="form-box">
        <legend style={{width: '145px'}}>Personal Info</legend>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <TextField
                floatingLabelText="First Name"
                fullWidth={true}
                onChange={(evt) => handleChange("first_name", evt.target.value) }
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <TextField
                floatingLabelText="Last Name"
                fullWidth={true}
                onChange={(evt) => handleChange("last_name", evt.target.value) }
              />
            </div>
            <div className="col-xs-12 col-md-4">
              <TextField
                floatingLabelText="Email"
                type="email"
                errorText={errors.email}
                fullWidth={true}
                onChange={(evt) => handleChange("email", evt.target.value) }
              />
            </div>
          </div>
        </fieldset>
        <Address
          handleChange={handleChange}
          disabled={false}
          type="Shipping"
          errors={errors.shipping_address ? errors.shipping_address : {}}
          legendWidth={185}
        />
        <Address
          handleChange={handleChange}
          disabled={false}
          type="Billing"
          errors={errors.billing_address ? errors.billing_address : {}}
          legendWidth={160}
        />
        <CreditCard
          handleChange={handleChange}
          disabled={false}
          cardType={cardType}
          errors={errors.credit_card ? errors.credit_card : {}}
        />
        <div className="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4">
          <RaisedButton
            label="Submit"
            type="submit"
            fullWidth={true}
            backgroundColor={green500}
            style={{marginTop: '1em'}}
            labelStyle={{color: white}}
          />
        </div>
      </form>
    </div>
  )
};
