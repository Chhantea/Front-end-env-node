import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class Create extends Component{
    constructor(){
        super();
        this.state = {
            data: {
                secret_questions:{}

            }
        }
    }
    componentDidMount(){
        var id ='5c076a5a907fb476817c3624'
        axios.get('http://localhost:3000/api/user/' + id )
            .then(res =>{
                this.setState({data: res.data});
                console.log("fetch cr8",this.state.data);
            })
    }
    render(){
        return(
            <div>
                this is create {console.log("output",this.state.data.secret_questions.question1)}
            </div>
        )
    }
}

export  default Create;