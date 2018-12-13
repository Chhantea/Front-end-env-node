import React,{Component} from 'react';


class ItemTable extends Component{

    render(){
        {console.log(this.props.items)}
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
            </table>
        );
    }
}

export default ItemTable;