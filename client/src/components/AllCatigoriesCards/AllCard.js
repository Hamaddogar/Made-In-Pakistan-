import React, { Component } from 'react';
import AgricultureAndFood from '../AllCatigoriesCards/Agriculture&Food';
import ApparelTextilesAccessories  from '../AllCatigoriesCards/ApparelTextilesAccessories';
import SportsAndToys from '../AllCatigoriesCards/SportsAndToys';
import { Wave } from 'react-animated-text';
const ExampleOne = () => (
  <Wave text="All Catigories" />
);
class AllCard extends React.Component {
    render() {





        return (
    
            <div className="container">
            <br/>
            <center> <h2><Wave text="All Catigories" effect="stretch" effectChange={2.2} /></h2></center>
                 <div class="row">
                        <div className="col-sm-4">
                <AgricultureAndFood/>
                </div>
                <div className="col-sm-4">
                <ApparelTextilesAccessories/>
                </div>
                <div className="col-sm-4">
                <SportsAndToys/>
                </div>
                </div>
            </div>





        )





    }

}
export default AllCard;

