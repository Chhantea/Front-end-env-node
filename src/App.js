import React,{Component} from 'react';
import axios from 'axios';
import UserTable from './components/UserTable'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3000/api/user')
            .then(res =>{
               this.setState({users: res.data});
                var strftime = require('strftime');
               console.log("get data",strftime('%d %B, %Y %H:%M:%S'));
            });
    }
    handleUpdateRecord = (old_user, user) =>{
        var users = this.state.users.slice();
        var index = users.indexOf(old_user);
        users.splice(index, 1, user);
        this.setState({users: users});
    }

    render(){
        return(
            <div>
                <UserTable users={this.state.users}
                           handleUpdateRecord={this.handleUpdateRecord}/>
            </div>
        )
    }
}

export default App;