import React from 'react';
import { Link } from 'react-router';
import { TextField, SelectField, MenuItem } from 'material-ui';

// Replace with categories
const creditCards = [
  { key: 'mastercard', display: 'MasterCard' },
  { key: 'visa', display: 'Visa' },
  { key: 'amex', display: 'American Express' }
]

export default ({ disabled, handleChange, cardType }) => {
  return (
    <div className="row credit-card">
      <div className="col-xs-12 col-sm-8 col-md-5">
        <TextField
          floatingLabelText="Card Number"
          fullWidth={true}
          disabled={disabled}
          onChange={(evt) => handleChange("number", evt.target.value) }
        />
      </div>
      <div className="col-xs-12 col-sm-4 col-md-3">
        <SelectField
          floatingLabelText="Payment Type"
          value={cardType}
          fullWidth={true}
          disabled={disabled}
          onChange={(event, key, value) => handleChange("card_type", value) }
        >
        {
          creditCards.map((card, i) => {
            return <MenuItem key={i} value={card.key} primaryText={card.display} />
          })
        }
        </SelectField>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-2">
        <TextField
          floatingLabelText="Expiration Date"
          fullWidth={true}
          disabled={disabled}
          onChange={(evt) => handleChange("expiry_date", evt.target.value) }
        />
      </div>
      <div className="col-xs-12 col-sm-6 col-md-2">
        <TextField
          floatingLabelText="CV Code"
          type="number"
          fullWidth={true}
          disabled={disabled}
          onChange={(evt) => handleChange("security_code", evt.target.value) }
        />
      </div>
    </div>
  )
};
