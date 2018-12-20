import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import QandA from './QandA';
import AddressData from './AddressData';
import "../style.css";
var strftime = require('strftime');

class Details extends Component{
     constructor(props){
         super(props);
         this.state ={
             user:{
                 secret_questions:{},
                 secret_answers: {}
             },
             edit: false,
             id: this.props.match.params.id,
             date: ''
         }
     };
    recordValue = (field) =>{
        return ReactDOM.findDOMNode(this.refs[field]).value;
    };
   componentDidMount(){
         axios.get("http://localhost:3000/api/user/" + this.state.id)
             .then(res =>{
                 this.setState({user: res.data});
             }).catch(error =>{
                 alert("Cannot Find target", error.message);
         });
   };
    validRecord(){
        if (this.recordValue("firstName") && this.recordValue("lastName")
            && this.recordValue("username")
            && this.recordValue("emailid")
            && this.recordValue("phone")) {
            return true;
        } else {
            return false;
        }
    };
    handleUpdate=(e)=>{
        e.preventDefault();
        if(this.validRecord()){
            var event_data = {
                first_name: this.recordValue("firstName"),
                last_name: this.recordValue("lastName"),
                username: this.recordValue("username"),
                emailid: this.recordValue("emailid"),
                phone: this.recordValue("phone"),
                dob: this.recordValue("dob"),
                accountType: this.recordValue("accountType")

            };
            console.log(event_data);
            axios.put('http://localhost:3000/api/user/'+ this.state.id, event_data)
                .then(res =>{
                    this.setState({user: res.data});
                    this.setState({ edit: false});
                }).catch(error =>{
                alert("SOmething error", error);
            });
        }else{
            alert('please fill all fields.');
        }
    }
    handleToggle=(e)=>{
        e.preventDefault();
        this.setState({edit: !this.state.edit});
        this.setDate();
    };
    setDate(){
            var date = new Date(this.state.user.dob);
            var newDate = date.toISOString();
            newDate = newDate.substring(0, 10);
            this.setState({date: newDate});

    }
    render(){
         return(
             <div className="container-fluid-8pers">
                 <div className="row justify-content-center">
                     <h3 >
                         <i className="fa fa-id-card-o"></i> {this.state.user.username}
                     </h3>
                 </div>
                 <Link to="/" className='btn btn-outline-info f-r' ><i className='fa fa-arrow-left'  aria-hidden='true'></i> Back to Item
                     List</Link><br/><br/><br/>

                 <ul className="nav nav-tabs md-tabs" id="myTab" role="tablist">
                     <li className="nav-item">
                         <a className="nav-link active" id="home-tab" data-toggle="tab" href="#Info" role="tab"
                            aria-controls="Info" aria-selected="true"><i className="fa fa-user-o"></i> Info</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" id="Address-tab" data-toggle="tab" href="#Address" role="tab"
                            aria-controls="Address" aria-selected="false"><i className="fa fa-address-book-o"></i> Address</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                            aria-controls="contact" aria-selected="false">Contact</a>
                     </li>
                 </ul>
                 <div className="tab-content card pt-5 pd-15" id="myTabContent">
                     <br/>
                     <div className="tab-pane fade show active" id="Info" role="tabpanel" aria-labelledby="Info-tab">
                         <div className='row justify-content-center'>
                             <div className="col-sm">
                                 <p className="inline"> ID:</p> <p className="inline fw">{this.state.user._id}</p>
                             </div>
                             <div className="col-sm">
                                  {this.state.edit? (
                                 <div>
                                     <p className="inline"> User Name:</p>   <input name="username"
                                            defaultValue={this.state.user.username}
                                            className="form-control"
                                            type="text"
                                            ref="username"
                                     />
                                 </div>) :(
                                 <div>
                                     <p className="inline"> User Name:</p> <p className="inline fw">{this.state.user.username}</p>
                                 </div>) }
                             </div>
                             <div className="col-sm">
                                  {this.state.edit? (
                                 <div>
                                     Phone: <input name="phone"
                                             defaultValue={this.state.user.phone}
                                             className="form-control"
                                             type="number"
                                             ref="phone"
                                 />
                                 </div>) :(
                                 <div>
                                     <p className="inline">  Phone: </p> <p className="inline fw">{this.state.user.phone}</p>

                                 </div>) }
                             </div>
                         </div>
                         <br/>
                         <div className='row '>
                             <div className="col-sm">
                                 {this.state.edit? (
                                 <div>
                                     First Name: <input name="First Name"
                                            defaultValue={this.state.user.firstName}
                                            className="form-control"
                                            type="text"
                                            ref="firstName"
                                     />

                                 </div>) :(
                                 <div>
                                     <p className="inline">  First Name: </p> <p className="inline fw">{this.state.user.firstName}</p>
                                 </div>) }
                             </div>
                             <div className="col-sm">
                                 {this.state.edit? (
                                 <div>
                                     Last Name:  <input name="lastname"
                                            defaultValue={this.state.user.lastName}
                                            className="form-control"
                                            type="text"
                                            ref="lastName"
                                     />

                                 </div>) :(
                                 <div>
                                     <p className="inline">  Last Name: </p> <p className="inline fw">{this.state.user.lastName}</p>
                                 </div>) }
                             </div>
                             <div className="col-sm">
                                  {this.state.edit? (
                                 <div>
                                     Email ID: <input name="email"
                                             defaultValue={this.state.user.emailid}
                                             className="form-control"
                                             type="text"
                                             ref="emailid"
                                 />
                                 </div>) :(
                                 <div>
                                     <p className="inline">  Email ID: </p> <p className="inline fw">{this.state.user.emailid}</p>
                                 </div>) }
                             </div>
                         </div>
                         {/*end row*/}
                         <br/>
                         <div className="row justify-content-end">
                             <div className="col-4">
                                 {this.state.edit?(
                                 <div>
                                    DOB: <input name="D.O.B"
                                            defaultValue={this.state.date}
                                            className="form-control"
                                            type="date"
                                            ref="dob"
                                     />

                                 </div>
                                 ):(
                                    <div>
                                        <p className="inline">   DOB: </p> <p className="inline fw">{strftime('%d/%b/%Y', new Date(this.state.user.dob))}</p>
                                    </div>
                                 )}
                             </div>
                             <div className="col-4">
                                 {this.state.edit?(
                                     <div>
                                         DOB: <input name="Account Type"
                                                     defaultValue={this.state.user.accountType}
                                                     className="form-control"
                                                     type="text"
                                                     ref="accountType"
                                     />

                                     </div>
                                 ):(
                                     <div>
                                         <p className="inline">    DOB: </p>  <p className="inline fw">{this.state.user.accountType}</p>
                                     </div>
                                 )}
                             </div>

                         </div>
                         {/*row end*/}
                         <br/>
                         <div className="row justify-content-end">
                             <div className="col-3 ">
                                 {this.state.edit?(<div></div>):(
                                     <div>
                                         <p className="f-r:">Secrets Questions:</p>
                                     </div>
                                 )}
                             </div>
                             <div className="col-5">
                                 {this.state.edit?(
                                     <div className="">

                                     </div>
                                 ):(
                                     <div>
                                         <p className="inline">  First Question: </p> <p className="inline fw">{this.state.user.secret_questions.question1}</p>
                                     </div>
                                 )}
                             </div>
                         </div>
                         {/*endrow*/}
                         <br/>
                         <div className="row justify-content-end">
                             <div className="col-5">
                                 {this.state.edit?(
                                     <div className="">

                                     </div>
                                 ):(
                                     <div>
                                         <p className="inline">  First Answer: </p> <p className="inline fw">{this.state.user.secret_answers.answer1}</p>
                                     </div>
                                 )}
                             </div>

                         </div>
                         {/*end row*/}
                         <br/>
                          <div className="row justify-content-end">
                              <div className="col-5">
                                  {this.state.edit?(
                                      <div className="">

                                      </div>
                                  ):(
                                      <div>
                                          <p className="inline">  First Question: </p> <p className="inline fw">{this.state.user.secret_questions.question2}</p>
                                      </div>
                                  )}
                              </div>

                          </div>
                         {/*end row*/}
                            <br/>
                         <div className="row justify-content-end">
                             <div className="col-5">
                                 {this.state.edit?(
                                     <div className="">

                                     </div>
                                 ):(
                                     <div>
                                         <p className="inline">  First Answer: </p> <p className="inline fw">{this.state.user.secret_answers.answer2}</p>
                                     </div>
                                 )}
                             </div>

                         </div>
                         {/*end row*/}
                         <hr/>
                         <div id="buttons" className=" f-r">
                             {this.state.edit?(
                                 <div>
                                 <button className="btn btn-success btn-sm" onClick={this.handleUpdate}>Save</button>
                                 <button onClick={this.handleToggle} className='btn btn-outline-info btn-sm'>Cancel</button>
                                 </div>
                             ):(
                                 <button onClick={this.handleToggle} className='btn btn-outline-info btn-sm'>Edit</button>
                             )}

                         </div>
                     </div>
                     <AddressData id={this.state.id}/>
                     <QandA/>
                 </div>

             </div>
         )
   }
}
export default Details;