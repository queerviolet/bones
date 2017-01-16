import React from 'react';
import { Link } from 'react-router';
import { TextField } from 'material-ui/';
import { GridList, GridTile } from 'material-ui/GridList';
import {
  Paper,
  IconMenu,
  MenuItem,
  Subheader,
  IconButton
} from 'material-ui';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: '100vw',
    margin: 'auto',
    overflowY: 'auto'
  },
  title: {
  },
  paper: {
    height: '20em',
    width: '20em',
    margin: 34,
    padding: 10,
    // textAlign: 'left'
  },
  cartDropdown: {
    height: '1em',
    width: '4em',
    margin: 34,
    textAlign: 'left'
  },
  iconStyles: {
    marginRight: 24
  }
};

const AllRocks = ({
  rocks,
  pathname,
  changeErrorText,
  addProductToCart,
  auth: { id }
}) => {
  const category = pathname.split('/')[3];
  const selectTitle = (() => {
    return category ? category : 'All Rockz';
  })();

  const title = (() => {
    return selectTitle === 'All Rockz' ?
    selectTitle :
    selectTitle[0].toUpperCase() +
    selectTitle.slice(1) +
    ' Rockz';
  })();

  let quantity = 0;
  let errorText = null;

  return (
    <div style={styles.root}>
      <Subheader><h1>{title}</h1></Subheader>
      <GridList
        cols={4}
        padding={4}
        cellHeight="auto"
        style={styles.gridList}
      >
        {rocks && rocks.map(rock => (
          <Paper key={rock.id} style={styles.paper} zDepth={4} rounded={false}>
          <GridTile
            cols={1}
            rows={1}
            key={rock.id}
            title={rock.name}
            subtitle={<span>$<b>{(rock.price) / 100}</b></span>}
            actionIcon={
              <IconMenu
                iconButtonElement={
                  <IconButton
                    key={rock.id + 'a'}
                    tooltip="Click to choose quantity"
                    tooltipPosition="top-left"
                  >
                    <i
                      className="material-icons"
                      style={styles.iconStyles}
                      onClick={() => {
                        quantity = 0;
                        console.log('item quantity reset', quantity);
                      }}
                    >
                      add_shopping_cart
                    </i>
                  </IconButton>
                }
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
              >
                <MenuItem>
                  <TextField
                    type="number"
                    name="itemQuantity"
                    errorText={errorText}
                    floatingLabelText="Quantity"
                    onTouchTap={evt => evt.stopPropagation()}
                    onChange={evt => {
                      quantity = evt.target.value;
                      errorText = changeErrorText(quantity);
                      console.log('current quantity input', quantity);
                      console.log('ERROR TEXT', errorText);
                    }}
                    hintText="How many would you like to order?"
                  />
                </MenuItem>
                <MenuItem
                  primaryText="Add To Cart"
                  onTouchTap={evt => {
                    evt.preventDefault();
                    addProductToCart(quantity, id, rock.id);
                    console.log('The quantity added to the cart:', quantity);
                  }}
                />
              </IconMenu>
            }
          >
            <Link to={`/rocks/${rock.id}`}><img src={rock.photo} /></Link>
          </GridTile>
        </Paper>
        ))}
    </GridList>
    </div>
  );
};

export default AllRocks;
