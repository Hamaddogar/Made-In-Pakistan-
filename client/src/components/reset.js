import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
import swal from 'sweetalert';
import TextField from '@material-ui/core/TextField';
import DarkBlue from '@material-ui/core/colors/blue';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import forgotpassword from '../images/forgotpassword.png';

const styles = theme => ({

	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	margin: {
		margin: theme.spacing.unit,
	},

	textField: {
		flexBasis: 310,
	},
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	marginn: {
		margin: theme.spacing.unit,
	},

	textFieldd: {
		flexBasis: 305,
	},
	movon: {
		margin: 'auto'
	},



	cssLabel: {
		'&$cssFocused': {
			color: DarkBlue[500],
		},
	},
	cssFocused: {},
	cssUnderline: {
		'&:after': {
			borderBottomColor: DarkBlue[500],
		},
	},
	cssOutlinedInput: {
		'&$cssFocused $notchedOutline': {
			borderColor: DarkBlue[500],
		},
	},
	notchedOutline: {},
	bootstrapRoot: {
		'label + &': {
			marginTop: theme.spacing.unit * 7,
		},
	},
	bootstrapInput: {
		borderRadius: 4,
		backgroundColor: theme.palette.common.white,
		border: '1px solid #ced4da',
		fontSize: 16,
		padding: '10px 20px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
		},
	},
	bootstrapFormLabel: {
		fontSize: 18,
	},
	card: {
		height: 500,
		maxWidth: 500,
		margin: 'auto',
		marginTop: 170,

	},
	CardHeaders: {
		margin: 'auto',
		paddingLeft: 150

	},
	cardContents: {
		paddingLeft: 70
	},
	title: {
		fontSize: 14,
		paddingLeft: 130
	},
	moveon: {
		paddingLeft: 130
	},
	pos: {
		marginBottom: 56,
	},
});
class Login extends React.Component {
	state = {
		email: '',
		showPassword: false,
		successMsg: ' ',
		errorMsg: 'oops ! Your Password didnot changed',
		user: {
			password: '',
			confirmPasswaord: '',
		},
	};

	handleChange = (event) => {
		const { user } = this.state;
		user[event.target.name] = event.target.value;
		this.setState({ user });
	}

	// handleChange = prop => event => {
	//     this.setState({ [prop]: event.target.value });
	//   };

	handleClickShowPassword = () => {
		this.setState(state => ({ showPassword: !state.showPassword }));
	};

	handleChangee = (event) => {
		const email = event.target.value;
		this.setState({ email });
	}
	componentDidMount() {
		// custom rule will have name 'isPasswordMatch'
		ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
			if (value !== this.state.user.password) {
				return false;
			}
			return true;
		});
	}

	handleChange = (event) => {
		const { user } = this.state;
		user[event.target.name] = event.target.value;
		this.setState({ user });
	}

	resetSubmit = (evt) => {

		evt.preventDefault();


		var option = {
			method: "POST",
			body: JSON.stringify({ password: this.password.value, confirmPasswaord: this.confirmPasswaord.value }),
			headers: {
				"Content-Type": "application/json",
			}

		}

		fetch('http://localhost:8000/resetpassword/' + this.props.match.params.token, option)
			.then((res) => { return res.json() })
			.then((user) => {
				if (user) {
					console.log(user)


					this.setState({
						forgotpasswordmsg: 'SUCCESSFULLY ! Your Password  Has Been Change'
					})


					{
						Alert.success(`${this.state.forgotpasswordmsg}`, {

							position: 'top',

						})

					}

				}
				else {
					{
						Alert.error(`${this.state.errorMsg}`, {
							position: 'top',
							effect: 'slide',

						})

					}
				}


			})


		// .catch((error) => console.log(error))
	}
	//\
	render() {

		const { classes } = this.props;
		const { email } = this.state;
		const { user } = this.state;



		return (

			<div className="container">

				<Card className={classes.card}>
					<CardHeader
						className={classes.CardHeaders}

					/>
					<center><img src={forgotpassword} /></center>
					<CardContent className={classes.cardContents}>

						<ValidatorForm
							ref="form"
							onSubmit={this.resetSubmit}
							onError={errors => console.log(errors)}
						>
							<div className={classes.root}>
								<TextValidator
									inputRef={(password) => this.password = password}
									id="outlined-adornment-password"
									className={classNames(classes.margin, classes.textFieldd)}
									variant="outlined"
									type={this.state.showPassword ? 'text' : 'password'}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">

											</InputAdornment>
										),
									}}
									label="Password"
									onChange={this.handleChange}
									name="password"
									validators={['required']}
									errorMessages={['this field is required']}
									value={user.password}
									label="Password"
									onChange={this.handleChange}
									name="password"

									validators={['required']}
									errorMessages={['this field is required']}
									value={user.password}
								/>
							</div>



							<div className={classes.container}>
								<TextValidator
									inputRef={(confirmPasswaord) => this.confirmPasswaord = confirmPasswaord}
									id="outlined-adornment-password"
									className={classNames(classes.margin, classes.textFieldd)}
									variant="outlined"
									type={this.state.showPassword ? 'text' : 'password'}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="Toggle password visibility"
													onClick={this.handleClickShowPassword}
												>
													{this.state.showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										),
									}}
									label="confirmPasswaord"
									onChange={this.handleChange}
									name="confirmPasswaord"

									validators={['isPasswordMatch', 'required']}
									errorMessages={[' Your password  didnot Match', 'this field is required']}
									value={user.confirmPasswaord}
								/>
							</div>
							<br />

							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <Button variant="contained" className={classes.moveon} type="submit" color="secondary" className={classes.button}>
								Reset Your Password
                 </Button>

						</ValidatorForm>


						&nbsp;&nbsp;&nbsp;&nbsp;      &nbsp;&nbsp;&nbsp;&nbsp;             <p>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  Now For Login ?  click Here <Link to="/Login">Login</Link></p>
					</CardContent>

				</Card>
				<div>
					<span>

					</span>
					<Alert stack={{ limit: 1 }} />
				</div>

			</div>





		)
	}
}
Login.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);



















// loginSubmit = (evt) => {
//     evt.preventDefault();
// let email = this.refs.email.value;


// let password = this.refs.password.value;
// const login_object = { username: email, password: password }
// var option = {

//     method: "POST",
//     body: JSON.stringify(login_object),
//     headers: {
//         "Content-Type": "application/json",
//     }


// }
// fetch("http://localhost:8000/loginUer", option)
//     .then((res) => { return res.json() })
//     .then((response)=>{
//             if(response)
//             {
//                 window.location.href="/dashboard"

//             }
//             else{
//                 window.location.href="/"
//             }
//     })
//     // .catch((error) => console.log(error))

