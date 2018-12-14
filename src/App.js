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
        // this.handleAdd = this.handleAdd.bind(this);
        // this.handleDeleteRecord = this.handleDeleteRecord.bind(this);
       // if ve use functionname = (somevalue) => {} we dont need to bind like on the above
    }
    componentDidMount(){
      axios.get('http://localhost:3000/api/item')
          .then((res) =>{
              this.setState({items: res.data});
          });
    }
    handleAdd = (item) => {
        //error
        var items = this.state.items;
        items.push(item);
        this.setState({items: items});

    }
    handleDeleteRecord = (item) => {
        var items = this.state.items.slice();
        var index = items.indexOf(item);
        items.splice(index, 1);
        this.setState({items: items});
    }
    handleUpdateRecord = (old_item, item) =>{
        var items = this.state.items.slice();
        var index = items.indexOf(old_item);
        items.splice(index, 1, item);
        this.setState({items: items});
    }
    render(){
        return(
            <div className='jumbotron'>
                <div className=''>
                    <NewForm handleAdd = {this.handleAdd}/>
                </div>
                <ItemTable items={this.state.items}
                           handleDeleteRecord={this.handleDeleteRecord}
                           handleUpdateRecord={this.handleUpdateRecord} />
            </div>
        )
    }
}

export default App;