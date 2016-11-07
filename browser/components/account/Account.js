'use strict';

import React from 'react';
import { Link } from 'react-router';

export default ({ account, children }) => {
	return (
		<div id="info" className="col-xs-12">		
			<div className="row center-block">
				<div className="col-xs-4 center">
					<h3>{ account.first_name }'s JustHome</h3>
				</div>
				<div className="col-xs-4 ">
					<h3>on Order: 0 items</h3>
				</div>
				<div className="col-xs-4">
					<h3>email: { account.email }</h3>
				</div>
			</div>

			<div id="account-nav" className="row">
					
					<ul className="nav nav-tabs">
						<li>
							<Link to={`/account/personal-info`} activeClassName="active">Personal Information</Link>
						</li>
						<li>
							<Link to={`/account/current-order`} activeClassName="active">Current Order</Link>
						</li>
						<li>
							<Link to={`/account/order-history`} activeClassName="active">Order History</Link>
						</li>
						<li>
							<Link to={`/account/edit-information`} activeClassName="active">Edit Information</Link>
						</li>
					</ul>
					{ children ? React.cloneElement(children, {account}) : null }
			</div>

		</div>
	)
};