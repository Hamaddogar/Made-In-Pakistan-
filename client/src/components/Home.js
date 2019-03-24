import React from 'react';
import  Header from '../components/Header';
import Slider from '../components/slider';
import AllCard from '../components/AllCatigoriesCards/AllCard';
import CatigoriesShow from '../components/ShowAllCatigories';
import Footer from '../components/footer';
import PageProgress from 'react-page-progress'
 class Home extends React.Component{
     render()
     {

          return(
             <div>
               <PageProgress color={'Green'} height={5}/>
           <Header/>
           <Slider/>
           <CatigoriesShow />
            
              <Footer/>
                 </div>

          )
          



     }






 }

  export default Home;