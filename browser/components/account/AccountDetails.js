import React from 'react';
import { Link } from 'react-router';
import { RaisedButton } from 'material-ui';
import { white, green500 } from 'material-ui/styles/colors';
import PersonalInfo from '../orderform/PersonalInfo';
import Address from '../orderform/Address';
import CreditCard from '../orderform/CreditCard';

export default ({ user }) => {
	console.log('before from personal', user)
	if (!user.billing_address) {
		return (<span>no address</span>)
	}
	console.log('after from personal', user)

	return (
		<div id="personal-info" className="col-xs-12" style={{"marginTop": '20px'}}>
			<PersonalInfo
				first_name={user.first_name}
				last_name={user.last_name}
				email={user.email}
				errors={{}}
				disabled={true}
			/>
			<Address
				disabled={true}
				values={user.shipping_address}
				type="Shipping"
				errors={{}}
				legendWidth={185}
			/>
			<Address
				disabled={true}
				values={user.billing_address}
				type="Billing"
				errors={{}}
				legendWidth={160}
			/>
			<CreditCard
				disabled={true}
				values={user.creditCard}
				errors={{}}
			/>
		</div>
	)
};


