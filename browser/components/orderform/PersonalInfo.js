import React from 'react';
import { TextField } from 'material-ui';

export default ({ first_name, last_name, email, disabled, handleChange, errors }) => {
  return (
  	<fieldset className="form-box">
    	<legend style={{width: '145px'}}>Personal Info</legend>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <TextField
            floatingLabelText="First Name"
            value={first_name}
            errorText={errors.first_name}
            fullWidth={true}
            disabled={disabled}
            onChange={(evt) => handleChange("first_name", evt.target.value, 'personal_info') }
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <TextField
            floatingLabelText="Last Name"
            value={last_name}
            errorText={errors.last_name}
            fullWidth={true}
            disabled={disabled}
            onChange={(evt) => handleChange("last_name", evt.target.value, 'personal_info') }
          />
        </div>
        <div className="col-xs-12 col-md-4">
          <TextField
            floatingLabelText="Email"
            value={email}
            type="email"
            errorText={errors.email}
            fullWidth={true}
            disabled={disabled}
            onChange={(evt) => handleChange("email", evt.target.value, 'personal_info') }
          />
        </div>
      </div>
    </fieldset>
  )
};
