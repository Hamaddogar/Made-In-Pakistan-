import React, { Component } from 'react';
import swal from 'sweetalert';

class Forgot extends React.Component {
    
    emailSubmit = (evt) => {

    evt.preventDefault();

    let email = this.refs.email.value;

   


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
                swal({
                    title: res,
                  });
                 

            }
            else{

                swal({
                    icon: "error",
                    text:"Enter your Correct Email"
                  });
            }
          

        })


        .catch((error) => console.log(error))
}
    render() {
        return (
          <div className="container">
            <div class="row">
                <div class="col-md-12">
                    <form onSubmit={this.emailSubmit}>
                        <legend>Forgot Password</legend>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" ref="email" name="email" autofocus class="form-control" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btn btn-primary" value="Reset Password" />
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )


    }





}
export default Forgot;