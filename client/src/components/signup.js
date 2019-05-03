import React, { Component } from 'react';
import { signupAction } from '../store/actions/sign_up_action';
import Alert from 'react-s-alert';
import { Link } from 'react-router-dom';
import { ValidationForm, TextInput, TextInputGroup, FileInput, SelectGroup, Checkbox } from "react-bootstrap4-form-validation";
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import myimage from '../images/logo.PNG';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    // If you want to use the reset state function, you need to have a reference to the ValidationForm component
    //If your React < 16.3, check https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
    this.formRef = React.createRef();
    this.state = {
      immediate: true,
      setFocusOnError: true,
      clearInputOnReset: false,
      messagedisplay: '',
      typeselected: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleErrorSubmit = (e, formData, errorInputs) => {
    console.log(e, formData)
  }
  resetForm = () => {
    let formRef = this.formRef.current;
    formRef.resetValidationState(this.state.clearInputOnReset);
  }
  handleSubmit = (e, signup_data, inputs) => {
    e.preventDefault();


    var option = {
      method: "POST",
      body: JSON.stringify(signup_data),
      headers: {
        "Content-Type": "application/json",
      }

    }
    fetch("http://localhost:8000/sign_up_user", option)
      .then((res) => { return res.json() })
      .then((res) => {
        if (res.success == true) {
            console.log(res)
          this.setState({
            messagedisplay: " Success! Succefully you have  Sign Up "
          })

          {
            Alert.success(`${this.state.messagedisplay}`, {

              position: 'top',

            })

          }

        }


        else {

          this.setState({
            messagedisplay:" Sorry! Please check your Field"
           })
        }
        this.props.dispatch(signupAction(res))

      })


      .catch((error) => console.log(error))

  }


  render() {

    return (

      <div class="container">
        <center><img src={myimage} /></center>
        <hr />


        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <header class="card-header">
                <a href="" class="float-right btn btn-outline-primary mt-1"><Link to="/Login">Login</Link></a>
                <h4 class="card-title mt-2">Sign up</h4>
              </header>
              <article class="card-body">
                <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}
                  ref={this.formRef}
                  immediate={this.state.immediate}
                  setFocusOnError={this.state.setFocusOnError}
                  defaultErrorMessage={{ required: "Please enter something." }} >

                  <div class="form-row">
                    <div class="col form-group">
                      <label htmlFor="fullName">First Name</label>
                      <TextInput name="name" id="name" required />

                    </div>
                    <div class="col form-group">
                      <label htmlFor="lastname">Last Name</label>
                      <TextInput name="fathername" id="fathername" required />

                    </div>


                  </div>
                  <div class="form-group">
                    <label>Email </label>
                    <label htmlFor="email">Email</label>
                    <TextInputGroup name="email" id="email" type="email"
                      prepend={<span className="input-group-text">@</span>}
                      successMessage="Your Email s Valid NOW!"
                      required />

                    <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-row">

                    <div class="form-group col-md-12">
                      <div className="form-group">
                        <label htmlFor="color">Who you Are?</label>
                        <SelectGroup name="typeselected" id="typeselected"
                          value={this.state.color}
                          required errorMessage="Please select a Type."
                          onChange={this.handleChange}>
                          <option value="">--- Please select ---</option>
                          <option value="Supplier">Supplier</option>
                          <option value="Buyer">Buyer</option>

                          <option value="yellow" disabled>other</option>
                        </SelectGroup>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col form-group">
                      <label htmlFor="password">Password</label>
                      <TextInput name="password" type="password" id="password" required />

                    </div>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block"> Register  </button>
                  </div>
                  <small class="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br /> Terms of use and Privacy Policy.</small>
                </ValidationForm>
              </article>
              <div class="border-top card-body text-center">Have an account? <Link to="/Login">Login</Link></div>
            </div>
          </div>

        </div>
        <div>
          <span>

          </span>
          <Alert stack={{ limit: 1 }} />
        </div>

        <div>

        </div>

      </div>



    )

  }





}
export default Signup;











