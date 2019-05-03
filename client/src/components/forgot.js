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
import Forgotpassword2 from '../images/Forgotpassword2.jpg'
 

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
        height: 430,
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
        forgotpasswordmsg :'',
        invalidPasswordMsg:'Your Email is Incorrect Check You Mail',
        user: {
            password: '',

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
    emailSubmit = (evt) => {

        evt.preventDefault();
    
        let email = this.email.value;
    
       
    
    
        var option = {
            method: "POST",
            body: JSON.stringify({email}),
            headers: {
                "Content-Type": "application/json",
            }
    
        }
        fetch('http://localhost:8000/forgot', option)
            .then((res) => {  return res.json() })
            .then((res) => {
                if(res)
                {
                    
                   this.setState({
                    forgotpasswordmsg : ` Check Your E-mail !${res}`
                   })
                     
                          
          {
            Alert.success(`${this.state.forgotpasswordmsg}`, {

              position: 'top',

            })

          }
      
                }
                else{
                    {
                        Alert.error(`${this.state.invalidPasswordMsg}`, {
                            position: 'top',
                            effect: 'slide',
                         
                        })
                           
                       }
                }
              
    
            })
    
    
            .catch((error) => console.log(error))
    }
    render() {
         console.log()
        const { classes } = this.props;
        const { email } = this.state;
        const { user } = this.state;



        return (

            <div className="container">

                <Card className={classes.card}>
                    <CardHeader
                        className={classes.CardHeaders} 
                    /> 
                   <center> <img src={Forgotpassword2} width="350"/></center>
                    
                    <CardContent className={classes.cardContents}>

                        <ValidatorForm
                            ref="form"
                            onSubmit={this.emailSubmit}
                            onError={errors => console.log(errors)}
                        >
                            <div className={classes.root}>
                            &nbsp; &nbsp; &nbsp;     <TextValidator
                                    inputRef={(email) => this.email = email}
                                    id="outlined-email-input"
                                    label="Email"
                                    className={classes.textField}
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined"

                                    onChange={this.handleChangee}
                                    name="email"
                                    value={email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={['this field is required', 'email is not valid']}
                                />
                            </div>

                     <br/>


                     &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;    <Button variant="contained" className={classes.moveon} type="submit" color="primary" className={classes.button}>
                             Reset Your Password   
                 </Button>
                        </ValidatorForm>
                      
                       
                    </CardContent>

                </Card>
                <div>
                <span>
             
                </span>
                <Alert stack={{limit: 1}} />
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

