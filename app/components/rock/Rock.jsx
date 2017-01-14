import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

import {GridList, GridTile} from 'material-ui/GridList';

const stars = (reviewRating) => {
  const result = []
  for (let i = 0; i < reviewRating; i++) {
    result.push(<i key={i} className="tiny material-icons">star</i>)
  }
  return result;
}

const style = {
  gridlist: {
    margin: 5,
    justifyContent: 'space-around',
  },
  paper: {
    height: '45vh',
    textAlign: 'left',
    margin: 18
  }
}

export default ({ rock }) => {
  const { reviews } = rock;
  console.log('here is rock reviews', reviews )


  return (
    <GridList cellHeight={'40vh'} style={style.gridlist}>
      <GridTile cols={1}>
        <img src={ rock.photo } />
      </GridTile>
      <GridTile cols={1}>
        <h1>{rock.name}</h1>
        <h2>{`Price: ${rock.price}`}</h2>
        <h2>{`Category: ${rock.category && rock.category.name}`}</h2>
        <h2>{`Color: ${rock.color}`}</h2>
        <p>{rock.description}</p>
        <p>Tags: {" "}
        {rock.tags && rock.tags.map(tag => '' + tag.name).join(', ')}</p>
      </GridTile>
      <GridTile cols={2}>
        <br />
        <br />
        {rock.reviews && rock.reviews.map((review) => {
            return (
              <div key={review.id}>
                <div>
                  { stars(review.rating) }
                </div>
                <p>{review.comment}</p>
              </div>
            )
          })}
      </GridTile>

    </GridList>
  )
}
