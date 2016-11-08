import React from 'react'
import { getStars } from '../../utils'
import { RaisedButton } from 'material-ui'
import { TextField } from 'material-ui';
import {white, green500} from 'material-ui/styles/colors';

export default ({ comment, rating, handleChange, handleSubmit, errors }) => {
  return (
    <div className="add-review">
      <form onSubmit={ handleSubmit }>
        <TextField
          value={comment}
          hintText="Write your review..."
          errorText={errors.comment}
          fullWidth={true}
          onChange={(evt) => handleChange('comment', evt.target.value) }
        />
        {
          getStars(rating, star => handleChange('rating', star), errors.rating)
        }
        <RaisedButton
          label="Submit"
          type="submit"
          fullWidth={false}
          backgroundColor={green500}
          style={{float: 'right'}}
          labelStyle={{color: white}}
        />
        <span className="add-review-error">{errors.submit}</span>
      </form>
    </div>
  	)
  };
