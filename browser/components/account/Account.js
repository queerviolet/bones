import React from 'react';
import { Link } from 'react-router';
import { fullName } from '../../utils'

// Tabs for different user types
const accountTabs = [
	{title: 'Personal Information', route: '/account/details'},
	{title: 'Order History', route: '/account/orders'}
];
const adminTabs = [
	{title: 'Recent Orders', route: '/admin/orders'},
	{title: 'Products', route: '/admin/products'}
];

export default ({ user, children }) => {
	// If not logged in, do not show pane switcher
	if (!Object.keys(user).length)
		return <span>You need to be logged in to see this page</span>

	const tabs = user.isAdmin ? adminTabs : accountTabs;
	return (
		<div id="info" className="col-xs-12">		
			<div className="row center-block">
				<div className="col-xs-4 center">
					<h3>{ `Name: ${fullName(user)}` }</h3>
				</div>
				<div className="col-xs-offset-4 col-xs-4">
					<h3>{ `Email: ${user.email}` }</h3>
				</div>
			</div>

			<div id="account-nav" className="row">
					<ul className="nav nav-tabs">
					{
						tabs.map((tab, i) => {
							return (
								<li key={i}>
									<Link to={ tab.route } activeClassName="active">{ tab.title }</Link>
								</li>
							)
						})
					}
					</ul>
					{ children ? React.cloneElement(children, {user}) : null }
			</div>
		</div>
	)
};