import React from 'react';
import { Link } from 'react-router';
import { TextField, SelectField, MenuItem } from 'material-ui';

// Replace with categories
const cardTypes = [
  { key: 'mastercard', display: 'MasterCard' },
  { key: 'visa', display: 'Visa' },
  { key: 'amex', display: 'American Express' }
]

export default ({ disabled, handleChange, cardType, errors }) => {
  return (
    <fieldset className="form-box">
      <legend style={{ width: '130px' }}>Credit Card</legend>
      <div className="row credit-card">
        <div className="col-xs-12 col-sm-8 col-md-5">
          <TextField
            floatingLabelText="Card Number"
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
            value={cardType}
            errorText={errors.card_type}
            fullWidth={true}
            disabled={disabled}
            onChange={(event, key, value) => handleChange("card_type", value, "credit_card") }
          >
          {
            cardTypes.map((type, i) => {
              return <MenuItem key={i} value={type.key} primaryText={type.display} />
            })
          }
          </SelectField>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-2">
          <TextField
            floatingLabelText="Expiration Date"
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
