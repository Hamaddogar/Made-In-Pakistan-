import React from 'react';
import  Header from '../components/Header';
import Footer from '../components/footer';
import imgg from '../images/trade list.PNG';
 class About  extends React.Component{


render()
{
  return(
    <div>
        <Header/>
        <div className ="container">
         <p>
           <h4>About</h4>
         Exports in Pakistan decreased to 261669 PKR Million in February from 283372 PKR Million in January of 2019. Exports in Pakistan averaged 44831.65 PKR Million from 1957 until 2019, reaching an all time high of 287798 PKR Million in December of 2018 and a record low of 51 PKR Million in April of 1958.
         </p>
       

        </div>
        <div className="container">
        <h2>Trade list Of Pakistan</h2>
        <hr/>
        <img src={imgg}/>

        </div>

      <Footer/>
    </div>


  )


}




 }
  export default About 