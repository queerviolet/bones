import React from'react';
import { Link } from 'react-router';
import { AutoComplete, SelectField, MenuItem } from 'material-ui'

// Replace with categories
const categories = [
  'All',
  'Bedroom',
  'Office',
  'Living Room'
]

// TODO: Place actual values inside jsx component
export default ({ products, category, handleChange }) => {
  return (
    <div id="products" className="col-xs-12">
      <div className="row">
        <div className="search col-sm-9">
          <AutoComplete
            dataSource={ products }
            floatingLabelText="Search"
            fullWidth={ true }
            onChange={(event, key, value) => handleChange("searchText", value) }
          />
        </div>
        <div className="filter col-sm-3">
          <SelectField
            floatingLabelText="Category"
            value={category}
            onChange={(event, key, value) => handleChange("category", value) }
          >
          {
            categories.map((category, i) => {
              return <MenuItem key={i} value={i} primaryText={category} />
            })
          }
          </SelectField>
        </div>
      </div>
      <div className="row">
      {
        products.map((product) => {
          return (
          <div key={ product.id } className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
              <img src="http://placehold.it/320x150" alt="" />
              <div className="caption">
                <h4 className="pull-right">$24.99</h4>
                <h4>
                  <Link to={`/products/${product.id}`}>First Product</Link>
                </h4>
              </div>
              <div className="ratings">
                <p className="pull-right">Stars here</p>
              </div>
            </div>
          </div>
          )
        })
      }
      </div>
    </div>
  )
};
