import React,{Component} from 'react';
import axios from 'axios';
import Address from './Address';

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
            })
    }
    render(){
        var addresses = [];
        this.state.addresses.forEach(function (address) {
            addresses.push(<Address address={address}
                             key={address + address._id}
                             handleUpdateRecord={this.state.handleUpdateRecord}
            /> );
        }.bind(this));
        return(
            <div className="tab-pane fade" id="Address" role="tabpanel" aria-labelledby="Address-tab">

                {addresses}

            </div>
        )
    }
}

export default AddressData;