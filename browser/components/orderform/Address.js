import React from 'react';
import { Link } from 'react-router';
import { TextField } from 'material-ui';

export default ({ disabled, handleChange }) => {
  return (
    <div className="address">
      <div className="row">
        <div className="col-xs-12">
          <TextField
            floatingLabelText="Street Addresss 1"
            fullWidth={true}
            disabled={disabled}
            onChange={(evt) => handleChange("street1", evt.target.value) }
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <TextField
            floatingLabelText="Street Addresss 2"
            fullWidth={true}
            disabled={disabled}
            onChange={(evt) => handleChange("street2", evt.target.value) }
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <TextField
            floatingLabelText="City"
            fullWidth={true}
            disabled={disabled}
            onChange={(evt) => handleChange("city", evt.target.value) }
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <TextField
            floatingLabelText="State"
            fullWidth={true}
            disabled={disabled}
            onChange={(evt) => handleChange("state", evt.target.value) }
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <TextField
            floatingLabelText="Zip Code"
            fullWidth={true}
            disabled={disabled}
            onChange={(evt) => handleChange("zip", evt.target.value) }
          />
        </div>
      </div>
    </div>
  )
};
