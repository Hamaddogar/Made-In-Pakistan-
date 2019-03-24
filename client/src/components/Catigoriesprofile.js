import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import swal from 'sweetalert';

class Profile extends React.Component {

  handleSubmit = (evt) => {

    evt.preventDefault();

    var formData = new FormData();
    var fileField = document.querySelector("input[type='file']");
    formData.append('photo', fileField.files[0]);
    formData.append('email', this.refs.email.value);
    formData.append('CompanyName', this.refs.CompanyName.value);
    formData.append('price', this.refs.price.value);
    formData.append('productName', this.refs.productName.value);
    formData.append('order', this.refs.order.value);
    formData.append('typeselected', this.refs.typeselected.value);
    formData.append('Description', this.refs.Description.value);
    
    var option = {
      method: "POST",
      body: formData,
    }
    fetch("http://localhost:8000/catgories", option)
      .then((res) => { return res.json() })
      .then((res) => {
        if (res) {
          swal("Welcome!", "Your Product Hasbeen Published!", "success");

          console.log(res);
          // this.props.history.push('/showUserData');

          //  store.dispatch(admitionFormAction(res));
        }

      })


      .catch((error) => console.log(error))
  }

  render() {

    return (
      <div className="container">

        <form onSubmit={this.handleSubmit} encType="multipart/form-data" >
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" ref="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <label for="inputname"> CompanyName </label>
              <input type="text" ref="CompanyName" className="form-control" placeholder="CompanyName" />
            </div>

            <div className="form-group col-md-6">
              <label for="inputPassword4">Price</label>
              <input type="text" ref="price" className="form-control" placeholder="price" />
            </div>
          </div>
          <div className="form-group">
            <label for="inputname"> Product Name</label>
            <input type="text" ref="productName" className="form-control" placeholder="Product Name" />
          </div>
          <div className="form-group">
            <label for="inputPassword4">Order Quantity</label>
            <input type="number"  ref="order" className="form-control" placeholder=" Min order 1" />
          </div>

          <div className="form-group col-md-4">
            <label for="inputState">Catgories</label>
            <select ref="typeselected" className="form-control" required>
              <option value="" >Choose...</option>
              <option value="Agriculture&Food">Agriculture & Food</option>
              <option value="ApparelTextiles&Accessories">Apparel,Textiles & Accessories</option>
              <option value="Auto&Transportation">Auto & Transportation</option>
              <option value="Bags,Shoes&Accessories">Bags, Shoes & Accessories</option>
              <option value="Electronics">Electronics</option>
              <option value="ElectricalEquipment,Components&Telecoms">Electrical Equipment, Components & Telecoms</option>
              <option value="Gifts,Sports&Toys">Gifts, Sports & Toys</option>
              <option value="Health&Beauty">Health & Beauty</option>
              <option value="Home,Lights&Construction">Home, Lights & Construction</option>
              <option value="Metallurgy, Chemicals, Rubber & Plastics">Metallurgy, Chemicals, Rubber & Plastics</option>


            </select>

            <input type="file" name="photo" />
          </div>
          <div class="form-group">
            <label for="Description">Description</label>
            <textarea class="form-control"  rows="5" ref="Description"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">  Submit</button>
        </form>

      </div>
    )

  }





}
export default Profile;











