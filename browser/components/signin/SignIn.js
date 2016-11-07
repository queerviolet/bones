import React from 'react';
import { TextField, SelectField, MenuItem, RaisedButton } from 'material-ui';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */


export default ({ handleChange, handleSubmit, login_error }) => {
	return (
		<div className="row">	
		<div id="sign-in" className="col-xs-6">
		  <form style={{ textAlign: 'center' }} onSubmit={ handleSubmit }>
				<legend style={{width: '145px'}}>Sign-In</legend>
				<TextField
					floatingLabelText="Email"
					type = 'email'
					fullWidth={true}
					onChange={(evt) => handleChange("email", evt.target.value) }
				/>
				<TextField
					floatingLabelText="Password"
					type = 'password'
					fullWidth={true}
					onChange={(evt) => handleChange("password", evt.target.value) }
				/>
				<span className="error-message">{ login_error }</span>
				<div className="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4">
					<RaisedButton
						label="Sign-In"
						type="submit"
						fullWidth={true}
						primary={true}
						style={{marginTop: '1em'}}
					/>
				</div>
			</form>
		</div>
		<div id="sign-up" className="col-xs-6">
			<form onSubmit={ handleSubmit }>
				<legend style={{width: '145px'}}>Sign-Up</legend>
						<div className='row'> 
							<div className="col-xs-6"> 
							<TextField
								floatingLabelText="First Name"
								fullWidth={true}
								onChange={(evt) => handleChange("firstname", evt.target.value) }
							/>
							</div> 
							<div className="col-xs-6"> 
							<TextField
								floatingLabelText="Last Name"
								fullWidth={true}
								onChange={(evt) => handleChange("lastname", evt.target.value) }
							/>
							</div> 
						</div>
							<TextField
								floatingLabelText="Email"
								type = 'email'
								fullWidth={true}
								onChange={(evt) => handleChange("email", evt.target.value) }
							/>
							<TextField
								floatingLabelText="Password"
								type = 'password'
								fullWidth={true}
								onChange={(evt) => handleChange("password", evt.target.value) }
							/>
						<div className="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4">
						<RaisedButton
							label="Sign-Up"
							type="submit"
							fullWidth={true}
							secondary={true}
							style={{marginTop: '1em'}}
						/>
				</div>
				</form>
			</div>
		</div>

		);
}

