import React from 'react'
import FontIcon from 'material-ui/FontIcon'

// Return the full name of the input user
export const fullName = (user) => `${user.first_name} ${user.last_name}`;

// Return the input price rounded to 2 decimals and with commas (i.e. $X,XXX.00)
export const formatPrice = price =>
  `$${price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

// Get the total price of the input LineItems or Products
export const totalPrice = (products) => {
  if (!products) return 0;
  return products.reduce(
    (sum, item) => sum + (item.quantity ? item.price * item.quantity : item.price)
  , 0);
};

// Return the average rating of the passed in reviews
export const getAvgRating = (reviews) => {
  if (!reviews) return 0;
  const totalStars = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.ceil(totalStars / reviews.length);
}

// Return JSX element containing stars related to the input rating
export const getStars = (rating, clickFn, err) => {
  const starArray = new Array(5).fill().map((item, i) => {
    return (rating > i) ? 'star' : 'star_border';
  })
  return (
    <div className="stars">
    {
      starArray.map((val, i) => {
        return <FontIcon
                 key={i}
                 className={`material-icons ${clickFn ? 'star-press' : 'star-static'}`}
                 style={{color: `${!clickFn ? 'black' : err ? 'red' : '#00b6ce'}`}}
                 onClick={()=> { if (clickFn) clickFn(i+1) }}>
                 { val }
               </FontIcon>
      })
    }
    </div>
  )
}

/* Form Validators */

// Credit card numbers
export const checkCreditCard = (number) => {
  return number.match(/^\d{4}-\d{4}-\d{4}-\d{4}$/);
}

// State
export const checkState = (state) => {
  return state.match(/^[A-Z]{2}$/);
}

// Zip code
export const checkZipCode = (zip) => {
  return zip.match(/^\d{5}(?:[-]\d{4})?$/);
}

// Expiration date
export const checkExpDate = (exp) => {
  return exp.match(/(0[1-9])|(1[0-2])\/\d{4}/);
}

// CV
export const checkCV = (cv) => {
  return cv.match(/\d{3}/);
}

/* ENUM Key->Display Mappers */

// Product Categories
export const categories = {
  all: 'All',
  bedroom: 'Bedroom',
  livingroom: 'Living Room',
  kitchen: 'Kitchen',
  office: 'Office',
  bath: 'Bath',
  dining: 'Dining Room'
};

// Product Type
export const types = {
  chair: 'Chair',
  table: 'Table',
  bed: 'Bed',
  closet: 'Closet',
  sofa: 'Sofa',
  desk: 'Desk'
};

// Product Style
export const styles = {
  coastal: 'Coastal',
  contemporary: 'Contemporary',
  traditional: 'Traditional',
  modern: 'Modern',
  gothic: 'Gothic',
  brutalist: 'Brutalist'
};

// Credit Card Types
export const creditCardTypes = {
  mastercard: 'MasterCard',
  visa: 'Visa',
  'amex': 'American Express'
};