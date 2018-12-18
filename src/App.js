import React,{Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            users: []
        };
    }
    componentDidMount(){
        axios.get('http://localhost:3000/api/user')
            .then(res=>{
                this.setState({users: res.data});
            }).catch(error =>{
                alert("Cannot fetch data from database!!!",error.message);
        });
    }

    render(){
        var i = 0;
        return(
          <div>
              <table className='table table-hover'>
                  <thead>
                  <tr>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.users.map(user =>
                      <tr key={i++}>
                          <td>{user.username}</td>
                          <td>{user.emailid} </td>
                          <td>{user.phone}</td>
                          <td>
                              <Link to={`/show/${user._id}`} className='btn btn-outline-info btn-sm'>Details</Link>
                          </td>
                      </tr>
                  )}
                  </tbody>
              </table>
          </div>
        );
    }
}
export default App;