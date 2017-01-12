import React from 'react';
// import { Link } from 'react-router';

const UserInfoComponent = ({ userInfo }) => (
  <div>
    <h1>{`${userInfo.firstName} ${userInfo.lastName}`}</h1>
    <p>email:</p>
    <p>{userInfo.email}</p>
  </div>
);

export default UserInfoComponent;
