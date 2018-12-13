import React,{Component} from 'react';
import axios from 'axios';
import ItemTable from './components/ItemTable';
import NewForm from './components/NewForm';
class App extends Component{
    constructor(props){
     super(props);
     this.state = {
         items: []
      };
    }
    componentDidMount(){
      axios.get('http://localhost:3000/api/item')
          .then((res) =>{
              this.setState({items: res.data});
              // console.log(res.data);
          });
    }
    handleAdd(item){
        // console.log(item);
        //error
        var items = this.state.items;
        items.push(item);
        this.setState({items: item});

    }
    render(){
        console.log("asdsadsadsadsadsadsadsadsadsadsa",this.state);
        return(
            <div className='jumbotron'>
                <div className=''>
                    <NewForm handleAdd = {this.handleAdd}/>
                </div>
                <table className='table table-striped'>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.items.map(item =>
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.name} </td>
                            <td>{item.details}</td>
                            <td>{item.createdAt}</td>
                            <td>

                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App;