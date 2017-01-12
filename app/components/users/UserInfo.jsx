import React from 'react';
import { Toggle, RaisedButton } from 'material-ui';
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

const UserInfoComponent = ({
  userInfo,
  handleToggle,
  handleExpandChange
}) => (
  <Card
    expanded={userInfo.expanded}
    onExpandChange={handleExpandChange}
  >
    <CardHeader
      title="Title"
      subtitle="Subtitle"
      avatar="images/ok-128.jpg"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText>
      <Toggle
        toggled={userInfo.expanded}
        onToggle={handleToggle}
        labelPosition="right"
        label="This toggle controls the expanded state of the component."
      />
    </CardText>
    <CardMedia
      expandable={true}
      overlay={<CardTitle
        title="Overlay title"
        subtitle="Overlay subtitle"
      />}
    >
      <img src="images/nature-600-337.jpg" />
    </CardMedia>
    <RaisedButton label="Edit" primary={true} style={style} />
    <h1>{`${userInfo.detail.firstName} ${userInfo.detail.lastName}`}</h1>
    <p>email:</p>
    <p>{userInfo.detail.email}</p>
  </Card>
);

export default UserInfoComponent;
