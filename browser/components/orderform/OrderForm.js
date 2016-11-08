import React from 'react';
import { Link } from 'react-router';
import PersonalInfo from './PersonalInfo';
import Address from './Address';
import CreditCard from './CreditCard';
import { TextField, SelectField, MenuItem, RaisedButton } from 'material-ui';
import { white, green500 } from 'material-ui/styles/colors';


export default ({ handleChange, handleSubmit, errors,
									first_name, last_name, email,
									billing_address, shipping_address, credit_card }) => {
	return (
		<div id="checkout" className="col-xs-12">
			<form onSubmit={ handleSubmit }>
				<PersonalInfo
					handleChange={handleChange}
					disabled={false}
					first_name={first_name}
					last_name={last_name}
					email={email}
					errors={errors.personal_info ? errors.personal_info : {}}
				/>
				<Address
					handleChange={handleChange}
					disabled={false}
					values={shipping_address}
					type="Shipping"
					errors={errors.shipping_address ? errors.shipping_address : {}}
					legendWidth={185}
				/>
				<Address
					handleChange={handleChange}
					disabled={false}
					values={billing_address}
					type="Billing"
					errors={errors.billing_address ? errors.billing_address : {}}
					legendWidth={160}
				/>
				<CreditCard
					handleChange={handleChange}
					disabled={false}
					values={credit_card}
					errors={errors.credit_card ? errors.credit_card : {}}
				/>
				<div className="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4">
					<RaisedButton
						label="Submit"
						type="submit"
						fullWidth={true}
						backgroundColor={green500}
						style={{marginTop: '1em'}}
						labelStyle={{color: white}}
					/>
				</div>
			</form>
		</div>
	)
};
