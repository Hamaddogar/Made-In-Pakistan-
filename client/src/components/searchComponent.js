import React from 'react';



class Searchcatigories extends React.Component {
    state={
        searchcati:[]
    }
  handleSearch = (evt) => {

    evt.preventDefault();

    let catigoriesSearch= this.refs.catigoriesSearch.value;


    

    var option = {
        method: "POST",
        body: JSON.stringify(catigoriesSearch),
        headers: {
            "Content-Type": "application/json",
        }

    }
    fetch("http://localhost:8000/searchdata", option)
        .then((res) => {  return res.json() })
        .then((res) => {
            console.log(res)
            

        })


        .catch((error) => console.log(error))
}
  
  

  render() {



    return (


      <div class="container"> 
     
       <form onSubmit={this.handleSearch}>
      <input type="text" placeholder ="Search...." ref="catigoriesSearch"/>
      <button type="submit" class="btn btn-primary">Search</button>
         </form>
</div>

    );
  }
}


export default Searchcatigories;