import React from 'react';
import { Link } from 'react-router';
import { RaisedButton } from 'material-ui';
import { white, green500 } from 'material-ui/styles/colors';


export default ({ account }) => {
	return (
		<div id="personal-info" className="col-xs-12" style={{"margin-top": '20px'}}>
		<fieldset className="form-box">
			<legend style={{width: '200px'}}>Personal Information</legend><br/>
				Name: { account.first_name + ' ' + account.last_name }<br/>
				Email: { account.email }<br/>
		</fieldset>
		<fieldset className="form-box">
			<legend style={{width: '200px'}}>Billing Address</legend><br/>
				Street1: { account.billing_address.street1 }<br/>
				Street2: { account.billing_address.street2 }<br/>
				City: { account.billing_address.city }<br/>
				State: { account.billing_address.state }<br/>
				Zip: { account.billing_address.zip }<br/>
		</fieldset>
		<fieldset className="form-box">
			<legend style={{width: '200px'}}>Shipping Address</legend><br/>
				Street1: { account.shipping_address.street1 }<br/>
				Street2: { account.shipping_address.street2 }<br/>
				City: { account.shipping_address.city }<br/>
				State: { account.shipping_address.state }<br/>
				Zip: { account.shipping_address.zip }<br/>
		</fieldset>
		<div className="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4">
			<Link to="/account/edit-information"><RaisedButton
				label="Edit"
				type="Edit"
				fullWidth={true}
				backgroundColor={green500}
				style={{marginTop: '1em'}}
				labelStyle={{color: white}}
			/>
			</Link>
		</div>
		</div>
	)
};


