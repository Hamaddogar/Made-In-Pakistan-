import React, { Component } from 'react';

// import bg2 from '../Images/bg_2.jpg';
// import bg3 from '../Images/bg_3.png';
// import bg1 from '../Images/bg_4.jpg';
 import AgricultureFood from '../../images/AgricultureAndFood.jpg'
class  AgricultureAndFood extends React.Component {
    agricultureCard=(evt)=>{
         
        this.props.history.push("/AgrcultireCatigoiress") ;

    }
    render() {

        return (
           
                        
                <div class="card-deck">
                    <div class="card" onClick ={this.agricultureCard.bind(this)} >
                        <img class="card-img-top" src={AgricultureFood} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Agriculture & Food</h5>
                            <p class="card-text">Agriculture is the science and art of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    
                </div>


        );



    }







}
export default AgricultureAndFood;