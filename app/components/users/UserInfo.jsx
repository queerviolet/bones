import React from 'react';
import { RaisedButton } from 'material-ui';
import {
  Card,
  CardText,
  CardTitle,
  CardMedia,
  CardHeader,
  CardActions
} from 'material-ui/Card';

const style = {
  margin: 12
};

const findDefaultAddress = (addressesArray) => {
  const defaultAddress = addressesArray.filter(address => address.defaultAddress);
  return defaultAddress[0];
};

const UserInfoComponent = ({
  userInfo,
  handleExpand,
  handleReduce,
  handleExpandChange
}) => (
  <Card
    expanded={userInfo.expanded}
    onExpandChange={handleExpandChange}
  >
    <CardHeader
      title={userInfo.detail.basicInfo.fullName}
      subtitle={(userInfo.detail.basicInfo.isAdmin) ? 'Admin' : 'Basic User'}
      actAsExpander={true}
      showExpandableButton={true}
    />

    <CardText>
      {`Email: ${userInfo.detail.basicInfo.email}`}
      <br />
      {userInfo.detail.addresses.length && `Default Address: ${findDefaultAddress(userInfo.detail.addresses)}`}
      <br />
      {`Orders: ${userInfo.detail.orders.length}`}
    </CardText>

    <CardMedia
      expandable={true}
      overlay={<CardTitle
        title={userInfo.detail.basicInfo.fullName}
        subtitle={(userInfo.detail.basicInfo.isAdmin) ? 'Admin' : 'Basic User'}
      />}
    >
      <img
        src="http://rock100diz.com/wp-content/uploads/2015/04/galets-5.jpg"
      />
    </CardMedia>

    <CardTitle
      title="Update your info"
      subtitle=""
      expandable={true}
    />

    <CardText expandable={true}>
      {/* {userInfo.detail.orders} */}
    </CardText>

    <CardActions>
      <RaisedButton
        label={(!userInfo.expanded) ? 'Edit' : 'Save'}
        primary={true}
        style={style}
        onClick={(!userInfo.expanded) ? handleExpand : handleReduce}
      />
    </CardActions>
  </Card>
);

export default UserInfoComponent;
