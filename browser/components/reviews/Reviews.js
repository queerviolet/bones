import React from 'react';
import { fullName, getStars } from '../../utils'
import AddReviewContainer from './AddReviewContainer'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


export default ({ user, productId, reviews, avgRating }) => {
  if (!avgRating) return null;
  let stars = getStars(avgRating);
  return (

    <Card initiallyExpanded={true}>
    <CardHeader
      title="Reviews"
      subtitle={stars}
      style={{backgroundColor:"#bcbcbc"}}
      actAsExpander={true}
    />
    <CardText expandable={true} style={{backgroundColor:"#dee0e2"}} className="col-xs-12">
      <div id="reviews" className="col-xs-12">
        {/*<div className="row reviews-header">
          <h3>Reviews</h3>
          <div className="reviews-rating">
            <p>{ avgRating }</p>
            {
              getStars(avgRating)
            }
          </div>
        </div>*/}
        <div>
          {
            // If the user is logged in and not an admin, show the Add Comment box
            Object.keys(user).length && !user.isAdmin ?
              <AddReviewContainer productId={productId} /> : null
          }
        </div>
        {
          reviews && reviews.map((review) => {
            return (
              <div key={ review.id } className="row review">
                <h4>{ review.user ? fullName(review.user) : null }</h4>
                {
                  getStars(review.rating)
                }
                <p>{ review.comment }</p>
              </div>
            )
          })
        }
      </div>
    </CardText>
    </Card>
    
  	)
  };
