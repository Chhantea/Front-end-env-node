import React,{Component} from 'react';
import Item from './item';

class ItemTable extends Component{

    render(){
        var items = [];
        console.log("item table",this.props);
        this.props.items.forEach(function(item) {
            items.push(<Item item={item}
                               key={'item' + item._id}
                               handleDeleteRecord = {this.props.handleDeleteRecord}
                               handleUpdateRecord={this.props.handleUpdateRecord} />);
        }.bind(this));
        return(
            <table className="table table-striped">
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
                  {items}
                  </tbody>
            </table>
        );
    }
}


export default ItemTable;