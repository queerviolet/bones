import React from 'react';
import { Link } from 'react-router';
import { TextField, SelectField, MenuItem, RaisedButton, DropDownMenu } from 'material-ui';
import { white, green500 } from 'material-ui/styles/colors';

export default ({ handleChange, handleSubmit, errors, type, style, category }) => {
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
            <div className="col-xs-12 col-sm-3">
              <TextField
                floatingLabelText="Price"
                hintText="$"
                fullWidth={true}
                onChange={(evt) => handleChange("price", evt.target.value) }
              />
            </div>
            <div className="col-xs-12 col-sm-3">
              <TextField
                floatingLabelText="Quantity"
                fullWidth={true}
                onChange={(evt) => handleChange("quantity", evt.target.value) }
              />
            </div>
            <div className="col-xs-12 col-sm-3">
              <TextField
                floatingLabelText="Color"
                fullWidth={true}
                onChange={(evt) => handleChange("color", evt.target.value) }
              />
            </div>
            <div className="col-xs-12 col-sm-3">
              <TextField
                floatingLabelText="Material"
                fullWidth={true}
                onChange={(evt) => handleChange("material", evt.target.value) }
              />
            </div>
            <div className="col-xs-12 col-sm-4">
              <DropDownMenu value={type} onChange={(evt, target, value) => handleChange("type", value)} style={{minWidth:150}}>
                  <MenuItem value="chair" primaryText="Chair" />
                  <MenuItem value="table" primaryText="Table" />
                  <MenuItem value="bed" primaryText="Bed" />
                  <MenuItem value="closet" primaryText="Closet" />
                  <MenuItem value="sofa" primaryText="Sofa" />
                  <MenuItem value="desk" primaryText="Desk" />
              </DropDownMenu>
            </div>
            <div className="col-xs-12 col-sm-4">
              <DropDownMenu value={style} onChange={(evt, target, value) => handleChange("style", value)} style={{minWidth:150}}>
                  <MenuItem value="coastal" primaryText="Coastal" />
                  <MenuItem value="contemporary" primaryText="Contemporary" />
                  <MenuItem value="traditional" primaryText="Traditional" />
                  <MenuItem value="modern" primaryText="Modern" />
                  <MenuItem value="gothic" primaryText="Gothic" />
                  <MenuItem value="brutalist" primaryText="Brutalist" />
              </DropDownMenu>
            </div>
            <div className="col-xs-12 col-sm-4">
              <DropDownMenu value={category} onChange={(evt, target, value) => handleChange("category", value)} style={{minWidth:150}}>
                  <MenuItem value="bedroom" primaryText="Bedroom" />
                  <MenuItem value="livingroom" primaryText="Living Room" />
                  <MenuItem value="kitchen" primaryText="Kitchen" />
                  <MenuItem value="office" primaryText="Office" />
                  <MenuItem value="bath" primaryText="Bath" />
                  <MenuItem value="dining" primaryText="Dining" />
              </DropDownMenu>
            </div>
            <div className="col-xs-12">
              <TextField
                floatingLabelText="Description"
                fullWidth={true}
                onChange={(evt) => handleChange("description", evt.target.value) }
              />
            </div>
            <div className="col-xs-12">
              <TextField
                floatingLabelText="Image URL 1"
                fullWidth={true}
                onChange={(evt) => handleChange("image1", evt.target.value) }
              />
            </div>
            <div className="col-xs-12">
              <TextField
                floatingLabelText="Image URL 2 (optional)"
                fullWidth={true}
                onChange={(evt) => handleChange("image2", evt.target.value) }
              />
            </div>
            <div className="col-xs-12">
              <TextField
                floatingLabelText="Image URL 3 (optional)"
                fullWidth={true}
                onChange={(evt) => handleChange("image3", evt.target.value) }
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
