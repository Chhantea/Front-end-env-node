import React,{Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class User extends Component{
    constructor(){
        super();
        this.state =  { edit:false };

    }
    handleToggle=(e)=>{
        e.preventDefault();
        this.setState({edit: !this.state.edit});
    }
    recordValue = (field) =>{
        return ReactDOM.findDOMNode(this.refs[field]).value;
    }
    handleUpdate=(e)=>{
        e.preventDefault();
        if(this.validRecord()){
            var event_data = {
                firstName: this.recordValue("firstName"),
                lastName: this.recordValue("lastName"),
                username: this.recordValue("username"),
                emailid: this.recordValue("emailid"),
                phone: this.recordValue("phone"),
                dob: this.recordValue("dob"),
                accountType: this.recordValue("accountType"),
                hash: this.props.user.hash,
                ratings:this.props.user.ratings,
                lastLogin:this.props.user.lastLogin
            };
            console.log(event_data);
            axios.put('http://localhost:3000/api/user/'+ this.props.user._id, event_data)
                .then(res =>{
                    this.props.handleUpdateRecord(this.props.user, res.data);
                    this.setState({ edit: false});
                }).catch(error =>{
                    alert("SOmething error", error);
            });
        }else{
            alert('please fill all fields.');
        }
    }
    validRecord(){
        if (this.recordValue("firstName") && this.recordValue("lastName")
            && this.recordValue("username")
            && this.recordValue("emailid")
            && this.recordValue("phone")
            && this.recordValue("dob")
            && this.recordValue("accountType")) {
            return true;
        } else {
            return false;
        }
    }
    renderForm(){
        return(
            <tr className='animated fadeIn'>
                <td>{this.props.user._id}</td>
                <td>
                    <input name="firstName"
                           defaultValue={this.props.user.firstName}
                           className="form-control"
                           type="text"
                           ref="firstName"
                    />
                </td>
                <td>
                    <input name="lastName"
                           defaultValue={this.props.user.lastName}
                           className="form-control"
                           type="text"
                           ref="lastName"
                    />
                </td>
                <td>
                    <input name="username"
                           defaultValue={this.props.user.username}
                           className="form-control"
                           type="text"
                           ref="username"
                    />
                </td>
                <td>
                    <input name="emailid"
                           defaultValue={this.props.user.emailid}
                           className="form-control"
                           type="text"
                           ref="emailid"
                    />
                </td>
                <td>
                    <input name="phone"
                           defaultValue={this.props.user.phone}
                           className="form-control"
                           type="number"
                           ref="phone"
                    />
                </td>
                <td>
                    <input name="dob"
                           defaultValue={this.props.user.dob}
                           className="form-control"
                           type="text"
                           ref="dob"
                    />
                </td>
                <td>
                    <input name="accountType"
                           defaultValue={this.props.user.accountType}
                           className="form-control"
                           type="text"
                           ref="accountType"
                    />
                </td>
                <td>
                    <a className="btn btn-success btn-sm"
                       onClick={this.handleUpdate}>
                        Save
                    </a>

                    <a className="btn btn-default btn-sm"
                       onClick={this.handleToggle} >
                        Cancel
                    </a>
                </td>
            </tr>
        );
    }
    renderRecord(){
        var usr = this.props.user;
        return(
            <tr key={usr._id}>
                <td>{usr._id}</td>
                <td>{usr.firstName}</td>
                <td>{usr.lastName}</td>
                <td>{usr.username} </td>
                <td>{usr.emailid}</td>
                <td>{usr.phone}</td>
                <td>{usr.dob} <span className="badge badge-pill badge-secondary">Secondary</span></td>
                <td>{usr.accountType}  <span className="badge badge-danger">Hot</span></td>
                <td>
                    <button onClick={this.handleToggle} className='btn btn-outline-info btn-sm'>Edit</button>
                </td>
            </tr>
        );
    }
    render(){
        if (this.state.edit) {
            return(this.renderForm());
        } else {
            return(this.renderRecord());
        }
    }

}

export default User;