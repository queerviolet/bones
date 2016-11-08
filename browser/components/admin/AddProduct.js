import React from 'react';
import { Link } from 'react-router';
import { TextField, SelectField, MenuItem, RaisedButton } from 'material-ui';
import { white, green500 } from 'material-ui/styles/colors';


export default ({ handleChange, handleSubmit, cardType, errors }) => {
  return (
    <div id="checkout" className="col-xs-12">
      <form onSubmit={ handleSubmit }>
        <fieldset className="form-box">
        <legend style={{width: '145px'}}>Personal Info</legend>
          <div className="row">
            <div className="col-xs-12">
              <TextField
                floatingLabelText="Product Name"
                fullWidth={true}
                onChange={(evt) => handleChange("name", evt.target.value) }
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
              <TextField
                floatingLabelText="Price"
                hintText="$"
                fullWidth={true}
                onChange={(evt) => handleChange("price", evt.target.value) }
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
              <TextField
                floatingLabelText="Quantity"
                fullWidth={true}
                onChange={(evt) => handleChange("quantity", evt.target.value) }
              />
            </div>
            <div className="col-xs-12">
              <TextField
                floatingLabelText="Description"
                fullWidth={true}
                onChange={(evt) => handleChange("description", evt.target.value) }
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <TextField
                floatingLabelText="Color"
                fullWidth={true}
                onChange={(evt) => handleChange("color", evt.target.value) }
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <TextField
                floatingLabelText="Material"
                fullWidth={true}
                onChange={(evt) => handleChange("material", evt.target.value) }
              />
            </div>
            <div className="col-xs-12">
              <TextField
                floatingLabelText="Image url 1"
                fullWidth={true}
                onChange={(evt) => handleChange("images", evt.target.value) }
              />
            </div>
            {/* enums: type, style, category. image url should push to images.array */}
          </div>
        </fieldset>
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
