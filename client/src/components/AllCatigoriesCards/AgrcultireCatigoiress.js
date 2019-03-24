import React, { Component } from 'react';


class Agri extends React.Component {
    state={
        data:[]
    }

componentDidMount() {
    const id = this.props.match.params.myid
  fetch("http://localhost:8000/detailrouter/" + id)
      .then((res) => {  return res.json() })
      .then((res) => {        
      console.log(res)
      this.setState({data: res.data})
      })


      .catch((error) => console.log(error))
}


    render() {
        return (

            <div>

<h1>Detail</h1>
{this.state.data.map((user)=>{
  return <div key={user._id}><h1> {user.email}</h1></div>


})}
            </div>

        );



    }








}
 export default Agri;