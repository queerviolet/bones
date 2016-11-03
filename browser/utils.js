import React from 'react'
import FontIcon from 'material-ui/FontIcon'

// Return the full name of the input user
export const fullName = (user) => `${user.first_name} ${user.last_name}`;

// Round the input price at two decimals (i.e. $XX.00)
export const roundPrice = (price) => price.toFixed(2);

// Return the average rating of the passed in reviews
export const getAvgRating = (reviews) => {
  const totalStars = reviews.reduce((sum, val) => sum + val.rating, 0)
  return Math.ceil(totalStars / reviews.length);
}

// Return JSX element containing stars related to the input rating
export const getStars = (rating) => {
  const starArray = new Array(5).fill().map((val, i) => {
    return (rating > i) ? 'star' : 'star_border';
  })
  return (
    <div className="stars">
    {
      starArray.map((val, i) => {
        return <FontIcon key={i} className="material-icons">{ val }</FontIcon>
      })
    }
    </div>
  )
}
