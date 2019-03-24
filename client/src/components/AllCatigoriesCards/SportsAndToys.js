import React, { Component } from 'react';
import SportsAndToysimg from '../../images/SportsAndToys.jpg';


class SportsAndToys extends React.Component {

    render() {

        return (

            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src={SportsAndToysimg} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">
                            Sports &Toys</h5>
                        <p class="card-text">Agriculture is the science and art of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>

            </div>



        );



    }







}
export default SportsAndToys;














