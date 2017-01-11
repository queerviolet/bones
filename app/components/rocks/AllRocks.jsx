import React from 'react';
import { Link } from 'react-router';

export default ({ rocks }) => {
  console.log('here are all rocks', rocks);
  return (
    <div>
     {
        rocks.map(rock => (
          <ul key = { rock.id } >
            <li> { rock.name } </li>
            <li> { rock.color } </li>
            <li> { rock.description} </li>
            <li> { rock.price } </li>
            <li> <img src = { rock.photo } /> </li>
          </ul>
        ))
     }

    </div>
  )
}