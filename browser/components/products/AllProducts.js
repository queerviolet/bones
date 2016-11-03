import React from 'react';
import { Link } from 'react-router';
import { AutoComplete, SelectField, MenuItem } from 'material-ui'
import { roundPrice, getAvgRating, getStars } from '../../utils'

// Replace with categories
const categories = [
  { key: 'all', display: 'All' },
  { key: 'bedroom', display: 'Bedroom' },
  { key: 'livingroom', display: 'Living Room' },
  { key: 'kitchen', display: 'Kitchen' },
  { key: 'office', display: 'Office' },
  { key: 'bath', display: 'Bath' },
  { key: 'dining', display: 'Dining Room' }
]

export default ({ products, category, handleChange }) => {
  return (
    <div id="products" className="col-xs-12">
      <div className="row">
        <div className="search col-sm-9">
          <AutoComplete
            dataSource={ products }
            floatingLabelText="Search"
            fullWidth={ true }
            onUpdateInput={(text) => handleChange("searchText", text) }
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
              return <MenuItem key={i} value={category.key} primaryText={category.display} />
            })
          }
          </SelectField>
        </div>
      </div>
      <div className="row">
      {
        products.map((product) => {
          const avgRating = getAvgRating(product.reviews)
          return (
          <div key={ product.id } className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
              <img src={product.images[0]} alt="" />
              <div className="caption">
                <h4 className="pull-right">{`$${roundPrice(product.price)}`}</h4>
                <h4>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </h4>
              </div>
              <div className="pull-right ratings">
              {
                getStars(avgRating)
              }
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
