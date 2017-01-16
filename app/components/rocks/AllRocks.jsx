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
    overflowY: 'auto',
  },
  title: {
  },
  paper: {
    height: '20em',
    width: '20em',
    margin: 34,
    padding: 10,
    textAlign: 'left'
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
  addProductToCart,
  auth: { id }
}) => {
  const category = pathname.split('/')[3];
  const selectTitle = (() => {
    return category ? category : 'All Rocks';
  })();

  const title =
    selectTitle[0].toUpperCase() +
    selectTitle.slice(1) +
    ' Rockz';

  return (
    <div style={styles.root}>
      <GridList
        cellHeight="auto"
        style={styles.gridList}
      >
        <Subheader><h1>{title}</h1></Subheader>
        {rocks && rocks.map(rock => (
          <Paper key={rock.id} style={styles.paper} zDepth={4} rounded={false}>
          <GridTile
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
                    >
                      add_shopping_cart
                    </i>
                  </IconButton>
                }
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
              >
                <MenuItem
                  primaryText="Add To Cart"
                  onTouchTap={(event) => addProductToCart(quantity, id, rock.id)}
                />
                <MenuItem>
                  <TextField
                    name="itemQuantity"
                    hintText="Hint Text"
                    errorText="You must order at least one item."
                    floatingLabelText="Quantity"
                  />
                </MenuItem>
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

//this
//onClick={() => addProductToCart(id, rock.id)}
