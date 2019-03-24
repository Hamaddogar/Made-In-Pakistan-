
import React, { Component } from 'react';

import swal from 'sweetalert';
class Reset extends React.Component{

	
resetSubmit = (evt) => {

    evt.preventDefault();
		

		

   


    var option = {
        method: "POST",
        body: JSON.stringify({password : this.refs.password.value, confirmPasswaord : this.refs.confirmPasswaord.value}),
        headers: {
            "Content-Type": "application/json",
        }

		}

    fetch('http://localhost:3000/resetpassword/'+this.props.match.params.token, option)
        .then((res) => {  return res.json() })
        .then((user) => {
					 if(user)
					 {

						swal({
							icon: "success",
							title:"your Password  has been successfully Change",
						
						});
					setInterval(function(){ 
						window.location.href='/login'
					 }, 6000);
           

					 }
			  else{

	           swal({
							icon: "error",
							title:"sorry! you password remain Unchange",
							text:"you Have Enter Wrong Email"
						});

					 }
          

        })


        // .catch((error) => console.log(error))
}
render()
{
 return(
<div className="container">
<div class="row">
	<div class="col-md-12">
		<form   onSubmit={this.resetSubmit.bind(this)}>
		  <legend>Reset Password</legend>
		  <div class="form-group">
		    <label for="password">New Password</label>
		    <input type="password" name="password" ref='password'  placeholder="New password" autofocus="autofocus" class="form-control"/>
		  </div>
		  <div class="form-group">
		    <label for="confirm">Confirm Password</label>
		    <input type="password" name="confirm"  ref='confirmPasswaord' placeholder="Confirm password" class="form-control"/>
		  </div>
		  <div class="form-group">
		    <button type="submit" class="btn btn-primary">Update Password</button>
		  </div>
		</form>
	</div>
</div>

</div>



 )



}
 

}
export default Reset;

