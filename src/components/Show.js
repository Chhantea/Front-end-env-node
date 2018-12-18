import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Show extends Component{
     constructor(props){
         super(props);
         this.state ={
             user:''
         }
     }
   componentDidMount(){
         axios.get("http://localhost:3000/api/user/" + this.props.match.params.id)
             .then(res =>{
                 this.setState({item: res.data});
             }).catch(error =>{
                 alert("Cannot Find target", error.message);
         });
   }
   render(){
         return(
             <div>

             </div>
         )
   }
}
export default Show;