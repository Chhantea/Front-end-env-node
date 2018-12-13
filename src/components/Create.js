import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            details: ''
        };
    }
    onChange = (e) =>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const {name,details} = this.state;
        axios.post('http://localhost:3000/api/item',{name,details})
            .then((result) => {
                this.props.history.push('/')
            }).catch(error =>{
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
                alert(error.response.data.name);
                console.log(error.response.data.name);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
    render(){
        const {name, details} = this.state;
        return(
            <div className='jumbotron'>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={this.onChange}
                           placeholder="Name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="details">Details:</label>
                    <textarea type="text" name='details' className="md-textarea form-control" rows="5" value={details} onChange={this.onChange}
                              placeholder="Enter any details" required/>
                </div>
                <button type="submit" className="btn btn-default">Create</button>
            </form>
            </div>
        );
    }
}

export default Create;