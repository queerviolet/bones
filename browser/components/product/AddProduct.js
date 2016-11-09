import React from 'react';
import { Link } from 'react-router';
import { TextField, SelectField, MenuItem, RaisedButton, DropDownMenu } from 'material-ui';
import { white, green500 } from 'material-ui/styles/colors';
import { categories, types, styles } from '../../utils'

export default ({ handleChange, handleSubmit, open, errors,
                  type, style, category }) => {
  return (
    <div id="add-product">
    {
      !open ?
        <RaisedButton
          label="Add Product"
          onClick={ () => handleChange('open', true) }
          backgroundColor={green500}
          labelStyle={{color: white}}
        /> :
        <form onSubmit={ handleSubmit }>
          <fieldset className="form-box">
          <legend style={{width: '145px'}}>New Product</legend>
            <div className="row">
              <div className="col-xs-12">
                <TextField
                  floatingLabelText="Name"
                  errorText={ errors.name }
                  fullWidth={ true }
                  onChange={(evt) => handleChange("name", evt.target.value) }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <TextField
                  floatingLabelText="Description"
                  errorText={ errors.description }
                  fullWidth={ true }
                  onChange={(evt) => handleChange("description", evt.target.value) }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-3">
                <TextField
                  floatingLabelText="Price (USD)"
                  type="number"
                  errorText={ errors.price }
                  fullWidth={ true }
                  onChange={(evt) => handleChange("price", evt.target.value) }
                />
              </div>
              <div className="col-xs-12 col-sm-3">
                <TextField
                  floatingLabelText="Quantity"
                  type="number"
                  errorText={ errors.quantity }
                  fullWidth={ true }
                  onChange={(evt) => handleChange("quantity", evt.target.value) }
                />
              </div>
              <div className="col-xs-12 col-sm-3">
                <TextField
                  floatingLabelText="Color"
                  fullWidth={ true }
                  onChange={(evt) => handleChange("color", evt.target.value) }
                />
              </div>
              <div className="col-xs-12 col-sm-3">
                <TextField
                  floatingLabelText="Material"
                  fullWidth={ true }
                  onChange={(evt) => handleChange("material", evt.target.value) }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <SelectField
                  floatingLabelText="Type"
                  value={ type }
                  fullWidth={ true }
                  onChange={(event, key, value) => handleChange("type", value) }
                >
                {
                  Object.keys(types).map((key, i) => {
                    return <MenuItem key={i} value={key} primaryText={types[key]} />
                  })
                }
                </SelectField>
              </div>
              <div className="col-xs-12 col-sm-4">
                <SelectField
                  floatingLabelText="Style"
                  value={ style }
                  fullWidth={ true }
                  onChange={(event, key, value) => handleChange("style", value) }
                >
                {
                  Object.keys(styles).map((key, i) => {
                    return <MenuItem key={i} value={key} primaryText={styles[key]} />
                  })
                }
                </SelectField>
              </div>
              <div className="col-xs-12 col-sm-4">
                <SelectField
                  floatingLabelText="Category"
                  value={ category }
                  errorText={ errors.category }
                  fullWidth={ true }
                  onChange={(event, key, value) => handleChange("category", value) }
                >
                {
                  Object.keys(categories).map((key, i) => {
                    return <MenuItem key={i} value={key} primaryText={categories[key]} />
                  })
                }
                </SelectField>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <TextField
                  floatingLabelText="Images"
                  errorText={ errors.images }
                  hintText="Insert comma separated image URLs"
                  fullWidth={true}
                  onChange={(evt) => handleChange("images", evt.target.value) }
                />
              </div>
            </div>
          </fieldset>
          <RaisedButton
            label="Submit"
            type="submit"
            backgroundColor={green500}
            style={{marginTop: '1em'}}
            labelStyle={{color: white}}
          />
        </form>
    }
    </div>
  )
};
