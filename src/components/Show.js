import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Create from './create';
import "../style.css";
class Show extends Component{
     constructor(props){
         super(props);
         this.state ={
             user:{
                 secret_questions:{},
                 secret_answers: {}
             },
             uname:  false,
             isId: false,
             phone: false,
             firstname: false,
             lastname: false,
             email: false
         }
     }
   componentDidMount(){
         axios.get("http://localhost:3000/api/user/" + this.props.match.params.id)
             .then(res =>{
                 this.setState({user: res.data});
                 console.log("show this result",this.state.user.secret_answers.answer1);
             }).catch(error =>{
                 alert("Cannot Find target", error.message);
         });
   }
    recordValue = (field) =>{
        return ReactDOM.findDOMNode(this.refs[field]).value;
    }
    handleOpen=(data)=>(e)=>{
        e.preventDefault();
        if(data == "username"){
            this.setState({uname: true});
        }
        if(data =="id"){
            this.setState({isId: true});

        }
        if(data =="phone"){
            this.setState({phone: true});

        }
        if(data =="firstname"){
            this.setState({firstname: true});

        }
        if(data =="lastname"){
            this.setState({lastname: true});

        }
        if(data =="email"){
            this.setState({email: true});

        }
    };
     handleClose=(data)=>(e)=>{
         e.preventDefault();
         if(data == "username"){
             this.setState({uname: false});
         }
         if(data =="id"){
             this.setState({isId: false});

         } if(data =="phone"){
             this.setState({phone: false});

         }
         if(data =="firstname"){
             this.setState({firstname: false});

         }
         if(data =="lastname"){
             this.setState({lastname: false});

         }
         if(data =="email"){
             this.setState({email: false});

         }
     }
    handleSave = (param) => (e) => {
        e.preventDefault();
        var data = param;
       if(data =="username"){
           var event_data = {
               _id: this.state.user._id,
               username: this.recordValue("username"),
               first_name: this.state.user.firstName,
               last_name: this.state.user.lastName,
               emailid: this.state.user.emailid,
               dob: this.state.user.dob,
               phone: this.state.user.phone,
               ratings: this.state.user.ratings,
               lastLogin: this.state.user.lastLogin,
               accountType: this.state.user.accountType
           };

       }
        if(data =="phone"){
            var event_data = {
                _id: this.state.user._id,
                username: this.state.user.username,
                first_name: this.state.user.firstName,
                last_name: this.state.user.lastName,
                emailid: this.state.user.emailid,
                dob: this.state.user.dob,
                phone: this.recordValue("phone"),
                ratings: this.state.user.ratings,
                lastLogin: this.state.user.lastLogin,
                accountType: this.state.user.accountType
            };

        }
        if(data =="firstname"){
            var event_data = {
                _id: this.state.user._id,
                username: this.state.user.username,
                first_name: this.recordValue("firstName"),
                last_name: this.state.user.lastName,
                emailid: this.state.user.emailid,
                dob: this.state.user.dob,
                phone: this.state.user.phone,
                ratings: this.state.user.ratings,
                lastLogin: this.state.user.lastLogin,
                accountType: this.state.user.accountType
            };

        }
        if(data =="lastname"){
            var event_data = {
                _id: this.state.user._id,
                username: this.state.user.username,
                first_name: this.state.user.firstName,
                last_name: this.recordValue("lastName"),
                emailid: this.state.user.emailid,
                dob: this.state.user.dob,
                phone: this.state.user.phone,
                ratings: this.state.user.ratings,
                lastLogin: this.state.user.lastLogin,
                accountType: this.state.user.accountType
            };

        }
        if(data =="email"){
            var event_data = {
                _id: this.state.user._id,
                username: this.state.user.username,
                first_name: this.state.user.firstName,
                last_name: this.state.user.lastName,
                emailid: this.recordValue("emailid"),
                dob: this.state.user.dob,
                phone: this.state.user.phone,
                ratings: this.state.user.ratings,
                lastLogin: this.state.user.lastLogin,
                accountType: this.state.user.accountType
            };

        }
      axios.put('http://localhost:3000/api/user/'+this.state.user._id, event_data)
          .then(res =>{
              var evaluate_data = {
                  _id: event_data._id,
                  username: event_data.username,
                  firstName: event_data.first_name,
                  lastName: event_data.last_name,
                  emailid: event_data.emailid,
                  dob: event_data.dob,
                  phone: event_data.phone,
                  ratings: event_data.ratings,
                  lastLogin: event_data.lastLogin,
                  accountType: event_data.accountType
              };
            this.setState({user: evaluate_data});
              if(data == "username"){
                  this.setState({uname: false});
              }
              if(data =="id"){
                  this.setState({isId: false});

              } if(data =="phone"){
                  this.setState({phone: false});

              }
              if(data =="firstname"){
                  this.setState({firstname: false});

              }
              if(data =="lastname"){
                  this.setState({lastname: false});

              }
              if(data =="email"){
                  this.setState({email: false});

              }
          }).catch(error =>{
            alert("Error occours");
      });

    }
    render(){
         var dt = this.state.user.secret_questions;
         console.log("dt value",dt);
         return(
             <div className='container-fluid'>
                 <div className="row justify-content-center">
                 <h3 >
                     {this.state.user.username}
                 </h3>
                </div>
                 <Link to="/" className='btn btn-outline-info f-r' ><i className='fa fa-arrow-left'  aria-hidden='true'></i> Back to Item
                     List</Link><br/><br/><br/>
             <div className='jumbotron'>
                             <div className='row justify-content-center'>
                                     <div className="col-sm">
                                         ID: {this.state.user._id}
                                     </div>
                                     <div className="col-sm">
                                         Name: {this.state.uname? (
                                         <div>
                                             <input name="username"
                                                    defaultValue={this.state.user.username}
                                                    className="form-control"
                                                    type="text"
                                                    ref="username"
                                             />
                                             <a onClick={this.handleSave("username")}> <i className='fa fa-check'  aria-hidden='true'></i></a>
                                             <a onClick={this.handleClose("username")}> <i className='fa fa-times'  aria-hidden='true'></i></a>

                                         </div>) :(
                                         <div>
                                             {this.state.user.username} <a onClick={this.handleOpen("username")}><i className='fa fa-pencil'  aria-hidden='true'></i></a>
                                         </div>) }
                                     </div>
                                     <div className="col-sm">
                                        Phone: {this.state.phone? (
                                         <div><input name="phone"
                                                     defaultValue={this.state.user.phone}
                                                     className="form-control"
                                                     type="number"
                                                     ref="phone"
                                         />
                                             <a onClick={this.handleSave("phone")}> <i className='fa fa-check'  aria-hidden='true'></i></a>
                                             <a onClick={this.handleClose("phone")}> <i className='fa fa-times'  aria-hidden='true'></i></a>
                                         </div>) :(
                                         <div>
                                             {this.state.user.phone} <a onClick={this.handleOpen("phone")}><i className='fa fa-pencil'  aria-hidden='true'></i></a>
                                         </div>) }
                                     </div>
                         </div>
                 <hr/>
                 <div className='row '>
                     <div className="col-sm">
                         First Name: {this.state.firstname? (
                         <div>
                             <input name="First Name"
                                    defaultValue={this.state.user.firstName}
                                    className="form-control"
                                    type="text"
                                    ref="firstName"
                             />
                             <a onClick={this.handleSave("firstname")}> <i className='fa fa-check'  aria-hidden='true'></i></a>
                             <a onClick={this.handleClose("firstname")}> <i className='fa fa-times'  aria-hidden='true'></i></a>

                         </div>) :(
                         <div>
                             {this.state.user.firstName} <a onClick={this.handleOpen("firstname")}><i className='fa fa-pencil'  aria-hidden='true'></i></a>
                         </div>) }
                     </div>
                     <div className="col-sm">
                         Last Name: {this.state.lastname? (
                         <div>
                             <input name="lastname"
                                    defaultValue={this.state.user.lastName}
                                    className="form-control"
                                    type="text"
                                    ref="lastName"
                             />
                             <a onClick={this.handleSave("lastname")}> <i className='fa fa-check'  aria-hidden='true'></i></a>
                             <a onClick={this.handleClose("lastname")}> <i className='fa fa-times'  aria-hidden='true'></i></a>

                         </div>) :(
                         <div>
                             {this.state.user.lastName} <a onClick={this.handleOpen("lastname")}><i className='fa fa-pencil'  aria-hidden='true'></i></a>
                         </div>) }
                     </div>
                     <div className="col-sm">
                         Email ID: {this.state.email? (
                         <div><input name="email"
                                     defaultValue={this.state.user.emailid}
                                     className="form-control"
                                     type="text"
                                     ref="emailid"
                         />
                             <a onClick={this.handleSave("email")}> <i className='fa fa-check'  aria-hidden='true'></i></a>
                             <a onClick={this.handleClose("email")}> <i className='fa fa-times'  aria-hidden='true'></i></a>
                         </div>) :(
                         <div>
                             {this.state.user.emailid} <a onClick={this.handleOpen("email")}><i className='fa fa-pencil'  aria-hidden='true'></i></a>
                         </div>) }
                     </div>
                 </div>
                   {/*end row*/}
                   <hr/>
                   <div className="row">
                       <Create/>
                   </div>
             </div>
             </div>
         )
   }
}
export default Show;