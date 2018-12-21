import React,{Component} from 'react';
import axios from 'axios';
import Address from './Address';
import NewForm from './NewForm';

class AddressData extends Component{
    constructor(){
        super();
        this.state={
            addresses:[],
            edit: false
        };

    };
    componentDidMount(){
        axios.get('http://localhost:3000/api/user/'+ this.props.id +'/address')
            .then(res =>{
                this.setState({addresses: res.data.addresses});
            }).catch(errors =>{
                alert("Cannot Fetch Address Data or Empty",errors);
        })
    }
    handleAdd = (address) => {
        //error
        var addresses = this.state.addresses;
        addresses.push(address);
        this.setState({addresses: addresses});

    }
    handleUpdateRecord = (old_address, address) =>{
        var addresses = this.state.addresses.slice();
        var index = addresses.indexOf(old_address);
        addresses.splice(index, 1, address);
        this.setState({addresses: addresses});
    };
    render(){
        var addresses = [];
        this.state.addresses.forEach(function (address) {
            addresses.push(<Address address={address}
                             key={address + address._id}
                             handleUpdateRecord={this.handleUpdateRecord}
                                    id = {this.props.id}
            /> );
        }.bind(this));
        return(
            <div className="tab-pane fade" id="Address" role="tabpanel" aria-labelledby="Address-tab">
                <div className="row ">
                <NewForm handleAdd={this.handleAdd}
                         id={this.props.id}
                />
                {addresses}
                </div>
            </div>
        )
    }
}

export default AddressData;