import React,{Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

// item class def here since it cannot find ./item.js
class Item extends Component{
    constructor(){
        super();
        this.state =  { edit:false };

    }
    handleToggle = (e) => {
        e.preventDefault();
        this.setState({edit: !this.state.edit});
    };
    recordValue = (field) =>{
        return ReactDOM.findDOMNode(this.refs[field]).value;
    }
    handleDelete = (e) => {
        e.preventDefault();
        if(confirm('Are you sure you want to delete?')) {
            axios.delete('http://localhost:3000/api/item/' + this.props.item._id)
                .then(res =>{
                    this.props.handleDeleteRecord(this.props.item);
                });
        }
    };
    handleUpdate=(e)=>{
        e.preventDefault();
        if(this.validRecord()){
            var event_data = {
                name: this.recordValue("name"),
                details: this.recordValue("details")
            };
            axios.put('http://localhost:3000/api/item/'+ this.props.item._id, event_data)
                .then(res =>{
                    console.log("before calling",this.props);
                    this.props.handleUpdateRecord(this.props.item, res.data);
                    this.setState({ edit: false});
                });
        }else{
            alert('please fill all fields.');
        }
    }
    validRecord(){
        if (this.recordValue("name") && this.recordValue("details")) {
            return true;
        } else {
            return false;
        }
    }

    renderForm(){
        return(
            <tr className='animated fadeIn'>
                <td>
                    <input name="name"
                           defaultValue={this.props.item.name}
                           className="form-control"
                           type="text"
                           ref="name"
                    />
                </td>
                <td>
                    <input name="details"
                           defaultValue={this.props.item.details}
                           className="form-control"
                           type="text"
                           ref="details"
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
        var item = this.props.item;
        return(
            <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.name} </td>
                <td>{item.details}</td>
                <td>{item.createdAt}</td>
                <td>
                    <button className='btn btn-info btn-sm' onClick={this.handleToggle}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick= {this.handleDelete}>Delete</button>
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

export default Item;
