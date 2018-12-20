import React,{Component} from 'react';

class Address extends Component{
    constructor(){
        super();
        this.state = {
        edit: false
        };
    }
    render(){
        var addrs = this.props.address;
        return(
            <p>{addrs.city} {addrs.streetAddress1}</p>
        )
    }
}

export default Address;