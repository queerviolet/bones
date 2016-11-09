import React from 'react';
import { Link } from 'react-router';
import { AutoComplete, SelectField, MenuItem } from 'material-ui'
import { formatPrice, getAvgRating, getStars } from '../../utils'

export default ({ products, category, handleChange }) => {
  return (
    <div id="products" className="col-xs-12">
      <div className="row">
        <div className="search col-xs-12 col-sm-8 col-md-9">
          <AutoComplete
            dataSource={ products }
            floatingLabelText="Search"
            fullWidth={ true }
            onUpdateInput={(text) => handleChange("searchText", text) }
          />
        </div>
        <div className="filter col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-4 col-md-3">
          <SelectField
            floatingLabelText="Category"
            value={category}
            fullWidth={ true }
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
      {
        products.map((product,rowIndex) => {
          return rowIndex %3 === 0 ? (
            <div className="row product-results">
              {
                products.filter((product, colIndex) => [rowIndex, rowIndex+1, rowIndex+2].some(i => colIndex === i))
                .map((product) => {
                  const avgRating = getAvgRating(product.reviews)
                  return (
                  <div key={ product.id } className="col-sm-4 col-lg-4 col-md-4">
                    <div className="thumbnail">
                      <img src={product.images[0]} alt="" className="img-sm-4 img-lg-4 img-md-4" />
                      <div className="caption">
                        <h4 className="pull-right">{ formatPrice(product.price) }</h4>
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
            ) : null
        })
      }
    </div>
  )
};
