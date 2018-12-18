import React,{Component} from 'react';
import User from './user'

class UserTable extends Component{

    render() {
        var users = [];
        this.props.users.forEach(function (user) {
            users.push(<User user={user}
                             key={user + user._id}
                             handleUpdateRecord={this.props.handleUpdateRecord}
                               /> );
        }.bind(this));
        return(
            <div className="">
            <table className='table table-bordered table-dark table-hover '>
                <thead className=''>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>DOB</th>
                    <th>Account Type</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                 {users}
                </tbody>
            </table>
            </div>
        )
    }
}

export default UserTable;