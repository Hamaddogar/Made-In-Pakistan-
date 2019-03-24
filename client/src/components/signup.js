import React, { Component } from 'react';
import {signupAction} from '../store/actions/sign_up_action';
import {Link} from 'react-router-dom';

class Signup extends React.Component {
  
  handleSubmit = (evt) => {

    evt.preventDefault();

    let email = this.refs.email.value;

    let password = this.refs.password.value;
    let name = this.refs.name.value;
    let fathername = this.refs.fathername.value;
    let typeselected = this.refs.typeselected.value;

    const signup_data = { email: email, password: password, name: name, fathername: fathername, typeselected: typeselected }

    var option = {
        method: "POST",
        body: JSON.stringify(signup_data),
        headers: {
            "Content-Type": "application/json",
        }

    }
    fetch("http://localhost:8000/sign_up_user", option)
        .then((res) => {  return res.json() })
        .then((res) => {
            console.log(res)
            this.props.dispatch(signupAction(res))

        })


        .catch((error) => console.log(error))
}

  render() {

    return(
      <div className="container">

        <form onSubmit={this.handleSubmit}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" ref="email" class="form-control" placeholder="Email" required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" ref="password" class="form-control"  placeholder="Password" required/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputname">Name</label>
    <input type="text"  ref="name"class="form-control" placeholder="Name" required/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">FatherName</label>
    <input type="text"  ref="fathername" class="form-control" placeholder="Father Name" required/>
  </div>
  
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select ref="typeselected" class="form-control" required>
        <option value="" >Choose...</option>
        <option value="Teacher">Supplier</option>
        <option value="student">Buyer</option>
        
      </select>

  
  </div>
  <button type="submit" class="btn btn-primary">Sign up</button>
</form>
<Link to="/login">Login</Link>
      </div>
    )

  }





}
export default Signup;











