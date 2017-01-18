import React from 'react';
import { Link } from 'react-router';
import { GridList, GridTile } from 'material-ui/GridList';
import {
  Paper,
  Snackbar,
  IconMenu,
  MenuItem,
  Subheader,
  TextField,
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
  paper: {
    height: '21vw',
    width: '21vw',
    margin: 34,
    padding: 10,
  },
  titleStyles: {
  },
  iconStyles: {
    marginRight: 24
  }
};

const AllRocks = ({
  rocks,
  pathname,
  updateQuantity,
  addedItemToCart,
  addProductToCart,
  handleSnackbarClose,
  auth: { id },
  itemQuantity: {
    quantity,
    errorText,
    isDisabled,
    messageOpen
  }
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
            titleStyle={styles.titleStyle}
            subtitle={<span>$<b>{(rock.price / 100).toFixed(2)}</b></span>}
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
                      onClick={() => updateQuantity(0)}
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
                    floatingLabelFixed={true}
                    floatingLabelText="Quantity"
                    onTouchTap={evt => evt.stopPropagation()}
                    onChange={evt => updateQuantity(Number(evt.target.value))}
                    hintText="How many would you like to order?"
                  />
                </MenuItem>
                <MenuItem
                  disabled={isDisabled}
                  primaryText="Add To Cart"
                  onTouchTap={evt => {
                    evt.preventDefault();
                    addedItemToCart();
                    addProductToCart(quantity, id, rock.id);
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
    <Snackbar
      open={messageOpen}
      message="Your rocks have been added to your cart!"
      autoHideDuration={3000}
      onRequestClose={handleSnackbarClose}
    />
    </div>
  );
};

export default AllRocks;
