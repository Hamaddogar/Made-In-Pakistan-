
import { GoogleComponent } from 'react-google-location' 
 
//... 
import React, { Component } from 'react';
import '../css/style.css'
 
 
 
const API_KEY = 'AIzaSyBTxM3HrSRFrcHS62g-feDsmVvkRNUShXw'  // how to get key - step are below
 
class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }
 
  render() {
    console.log(this.state.place)
    return (
      <div >
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>
 
    )
  } 
}
 
 
export default HomeComponent;