import React from 'react';
import { Link } from 'react-router';
import { TextField, SelectField, MenuItem } from 'material-ui';
import { creditCardTypes } from '../../utils'

export default ({ values, disabled, handleChange, errors }) => {
  return (
    <fieldset className="form-box">
      <legend style={{ width: '130px' }}>Credit Card</legend>
      <div className="row credit-card">
        <div className="col-xs-12 col-sm-8 col-md-5">
          <TextField
            floatingLabelText="Card Number"
            value={values.number}
            hintText="XXXX-XXXX-XXXX-XXXX"
            errorText={errors.number}
            fullWidth={true}
            disabled={disabled}
            onChange={(evt) => handleChange("number", evt.target.value, "credit_card") }
          />
        </div>
        <div className="col-xs-12 col-sm-4 col-md-3">
          <SelectField
            floatingLabelText="Payment Type"
            value={values.card_type}
            errorText={errors.card_type}
            fullWidth={true}
            disabled={disabled}
            onChange={(event, key, value) => handleChange("card_type", value, "credit_card") }
          >
          {
            Object.keys(creditCardTypes).map((key, i) => {
              return <MenuItem key={i} value={key} primaryText={creditCardTypes[key]} />
            })
          }
          </SelectField>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-2">
          <TextField
            floatingLabelText="Expiration Date"
            value={values.expiry_date}
            hintText="MM/YYYY"
            errorText={errors.expiry_date}
            fullWidth={true}
            disabled={disabled}
            onChange={(evt) => handleChange("expiry_date", evt.target.value, "credit_card") }
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-2">
          <TextField
            floatingLabelText="CV Code"
            value={values.security_code}
            type="number"
            errorText={errors.security_code}
            fullWidth={true}
            disabled={disabled}
            onChange={(evt) => handleChange("security_code", evt.target.value, "credit_card") }
          />
        </div>
      </div>
    </fieldset>
  )
};
