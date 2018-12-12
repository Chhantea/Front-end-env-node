import React, { Component } from 'react';
import {connect} from 'react-redux';
class Post extends Component{
    render(){
        return(
          <div>
              <h2>{this.props.post.title}</h2>
              <p>{this.props.post.message}</p>
              <button className='btn btn-warning btn-sm'>Edit</button>
              <button onClick={() => this.props.dispatch({type: 'DELETE_POST', id:this.props.post.id})} className='btn btn-danger btn-sm'>Delete</button>
          </div>
        );
    }
}
export default  connect()(Post);