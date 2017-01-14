import React from 'react';
import { Link } from 'react-router';
import { Paper, IconButton, Subheader } from 'material-ui';
import { GridList, GridTile } from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
  paper: {
    height: '15em',
    width: '15em',
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

  const title = selectTitle[0].toUpperCase() + selectTitle.slice(1);

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
              <IconButton onClick={() => addProductToCart(id, rock.id)}><i
                className="material-icons"
                style={styles.iconStyles}
              >
                add_shopping_cart
              </i></IconButton>
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
