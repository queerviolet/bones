import React from'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import { login, signup } from '../../redux/user';


function SignInDecorator (SignIn) {
	return class StatefulSignIn extends React.Component {
		constructor(props) {
			super(props) 
			this.state = {
				firstname: '', lastname: '', email: '', 
				password: '', login_error: ''}

			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}
			
		handleChange(field, value) {
			let newState = {};
			newState[field] = value
			this.setState(newState);
		}

		handleSubmit (evt) {
			evt.preventDefault();

			const credentials = {
				email: this.state.email,
				password: this.state.password
				}

			if(evt.target.childNodes[0].innerHTML === "Sign-In") {
				this.props.login(credentials, (err) => {
					this.setState({ login_error: err });
				})
			} else {
				credentials.firstname = this.state.firstname
				credentials.lastname = this.state.lastname
				this.props.signup(credentials)
			}
		}

		render() {
			return (
				<SignIn
				  handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
					login_error={this.state.login_error}
				/>
			)
		}
	}
}


const mapDispatchtoProps = dispatch => ({ 
	signup: credentials => {
		dispatch(signup(credentials));
	},
	login: (credentials, displayErr) => {
		dispatch(login(credentials, displayErr));
	}
})

export default connect(null, mapDispatchtoProps)(SignInDecorator(SignIn));
