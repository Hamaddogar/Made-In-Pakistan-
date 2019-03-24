import React from "react";
import ReactDOM from "react-dom";
import SmartSlider from "react-smart-slider";

import '../css/Slider.css'
function Slider() {
  const slidesArray = [
    {
      title: "Cotton",
      url: "https://images.unsplash.com/photo-1529087795572-98e214aeeb79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
     
    },
    {
      title: "Mango",
      url: "http://www.donaguacato.com/us/wp-content/uploads/2017/01/mangos.png",
      height:1000
      
    },
    {
      title: "FootBall",
      url: "https://images.wallpaperscraft.com/image/football_ball_exercise_water_abstraction_79989_1920x1080.jpg",
      height:1000,

      // Set this key, if you want to update style for specific slide caption
      customCaptionStyle: {
        color: "#7fffd4",
        "font-weight": "bold",
        height:1000
     
        
      }
    }
  ];
  return (
    <div className="App">
      
      <SmartSlider
        slides={slidesArray}
        autoSlide={true}
        buttonShape="square" // round or square
      />
    </div>
  );
}
export default Slider;