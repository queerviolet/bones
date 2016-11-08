'use strict';

import React from 'react';
import { Link } from 'react-router';

export default ({ user, children }) => {
	console.log('before', user)
	if (!Object.keys(user).length) {
		return (<span>log in first</span>)
	}
	console.log('after', user)

	return (
		<div id="info" className="col-xs-12">		
			<div className="row center-block">
				<div className="col-xs-4 center">
					<h3>{ `${user.first_name} ${user.last_name}` }</h3>
				</div>
				<div className="col-xs-4 ">
					<h3>on Order: 0 items</h3>
				</div>
				<div className="col-xs-4">
					<h3>{ user.email }</h3>
				</div>
			</div>

			<div id="account-nav" className="row">
					<ul className="nav nav-tabs">
						<li>
							<Link to={`/account/details`} activeClassName="active">Personal Information</Link>
						</li>
						<li>
							<Link to={`/account/order-history`} activeClassName="active">Order History</Link>
						</li>
					</ul>
					{ children ? React.cloneElement(children, {user}) : null }
			</div>
		</div>
	)
};