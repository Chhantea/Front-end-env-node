import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from '../.././mdbootstrap/js/jquery-3.3.1.min';


class Address extends Component{
    constructor(props){
        super(props);
        this.state = {
        edit: false,
            value1: this.props.address.streetAddress1,
            value2: this.props.address.streetAddress2,
            rows2: 1,
            rows1: 1,
            minRows: 1,
            maxRows: 4,
        };
    }
    componentDidMount(){

    }
    handleToggle=(e)=>{
        e.preventDefault();
        this.setState({edit: !this.state.edit});
    };
    recordValue = (field) =>{
        return ReactDOM.findDOMNode(this.refs[field]).value;
    };
    handleUpdate = (e) => {
        var get_adr1 = this.recordValue("streetAddress1").replace(/\n/g, "");
        var get_adr2 = this.recordValue("streetAddress2").replace(/\n/g, "");
        e.preventDefault();
      var event_data ={
          street_address1: get_adr1,
          street_address2: get_adr2,
          city: this.recordValue("city"),
          state: this.recordValue("state"),
          country: this.recordValue("country"),
          postal_code: this.recordValue("postalCode"),
          phone: this.recordValue("phone"),
          landmark: this.recordValue("landmark")
      };
      console.log(event_data);
      axios.put('http://localhost:3000/api/user/'+ this.props.id+"/address/" + this.props.address._id, event_data)
          .then(res =>{
              this.props.handleUpdateRecord(this.props.address, res.data);
              this.setState({ edit: false});
          });

    };
    changeAdd1 = (event) => {
        const textareaLineHeight = 24;
        const { minRows, maxRows } = this.state;

        const previousRows = event.target.rows;
        event.target.rows = minRows; // reset number of rows in textarea

        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }

        if (currentRows >= maxRows) {
            event.target.rows = maxRows;
            event.target.scrollTop = event.target.scrollHeight;
        }

        this.setState({
            value1: event.target.value,
            rows1: currentRows < maxRows ? currentRows : maxRows,
        });
    };
    changeAdd2=(event) =>{
        const textareaLineHeight = 24;
        const { minRows, maxRows } = this.state;

        const previousRows = event.target.rows;
        event.target.rows = minRows; // reset number of rows in textarea

        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }

        if (currentRows >= maxRows) {
            event.target.rows = maxRows;
            event.target.scrollTop = event.target.scrollHeight;
        }

        this.setState({
            value2: event.target.value,
            rows2: currentRows < maxRows ? currentRows : maxRows,
        });
    };
    renderRecord(){
        var addrs = this.props.address;
        return(

            <div className="col-md-4 card mr-3 mb-3">
                <div className="card-body d-flex flex-column">

                    <h6 className="card-title inline"><a>Street Address-1:</a></h6>

                    <p className="card-text"> {addrs.streetAddress1}
                    </p>
                    <h6 className="card-title inline"><a>Street Address-2:</a></h6>

                    <p className="card-text"> {addrs.streetAddress2}
                    </p>
                    <h6 className="card-title inline"><a>Land Mark:</a></h6>

                    <p className="card-text"> {addrs.landmark}
                    </p>
                    <div className="row">
                        <div className="col-4">
                            <h6 className="inline">City:</h6> <p className="inline card-text">{addrs.city}</p>
                        </div>
                        <div className="col-4">
                            <h6 className="inline">State:</h6> <p className="inline card-text">{addrs.state}</p>
                        </div>
                        <div className="col-4">
                            <h6 className="inline">Country:</h6> <p className="inline card-text">{addrs.country}</p>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-6">
                            <h6 className="inline">Postal Code:</h6> <p className="inline card-text">{addrs.postalCode}</p>
                        </div>
                        <div className="col-6">
                            <h6 className="inline">Phone:</h6> <p className="inline card-text">{addrs.phone}</p>
                        </div>
                    </div><br/>
                    <div className="footer mt-auto">
                        <a href="#" className="btn  btn-outline-info btn-sm" onClick={this.handleToggle}>Edit</a>
                        <a href="#" className="btn btn-outline-info btn-sm">Set as default</a>
                    </div>
                </div>

            </div>


        )
    }
    renderForm(){

        return(
            <div className="col-md-4 card mr-3 mb-3 animated fadeIn">
                <div className="card-body d-flex flex-column">

                    <h6 className="card-title inline"><a>Street Address-1:</a></h6>

                    <p className="card-text"> <textarea name="streetAddress1"
                                                     value={this.state.value1}
                                                     className="form-control md-textarea  "
                                                     type="text" rows={this.state.rows1}
                                                     ref="streetAddress1"
                                                        id="textarea"
                                                        onChange={this.changeAdd1}
                                                        required
                    />
                    </p>
                    <h6 className="card-title inline"><a>Street Address-2:</a></h6>

                    <p className="card-text"> <textarea name="streetAddress2"
                                                     value={this.state.value2}
                                                     className="form-control ovf"
                                                     type="text" rows={this.state.rows2}
                                                        id="textarea2"
                                                     ref="streetAddress2"
                                                        onChange={this.changeAdd2}
                    />
                    </p>
                    <h6 className="card-title inline"><a>Land Mark:</a></h6>

                    <p className="card-text"> <input name="landmark"
                                                     defaultValue={this.props.address.landmark}
                                                     className="form-control"
                                                     type="text"
                                                     ref="landmark"
                    />
                    </p>
                    <div className="row">
                        <div className="col-4">
                            <h6 className="inline">City:</h6> <p className="inline card-text">
                            <input name="city"
                                   defaultValue={this.props.address.city}
                                   className="form-control"
                                   type="text"
                                   ref="city"
                            />
                        </p>
                        </div>
                        <div className="col-4">
                            <h6 className="inline">State:</h6> <p className="inline card-text">
                            <input name="state"
                                   defaultValue={this.props.address.state}
                                   className="form-control"
                                   type="text"
                                   ref="state"
                            />
                        </p>
                        </div>
                        <div className="col-4">
                            <h6 className="inline">Country:</h6> <p className="inline card-text">
                            <input name="country"
                                   defaultValue={this.props.address.country}
                                   className="form-control"
                                   type="text"
                                   ref="country"
                            />
                        </p>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-6">
                            <h6 className="inline">Postal Code:</h6> <p className="inline card-text">
                            <input name="postalCode"
                                   defaultValue={this.props.address.postalCode}
                                   className="form-control"
                                   type="text"
                                   ref="postalCode"
                            />
                        </p>
                        </div>
                        <div className="col-6">
                            <h6 className="inline">Phone:</h6> <p className="inline card-text">
                            <input name="phone"
                                   defaultValue={this.props.address.phone}
                                   className="form-control"
                                   type="number"
                                   ref="phone"
                            />
                        </p>
                        </div>
                    </div><br/>
                    <div className="footer mt-auto">
                        <button  className="btn btn-outline-success btn-sm" onClick={this.handleUpdate}>Save</button>
                        <button  className="btn  btn-outline-warning btn-sm" onClick={this.handleToggle}>Cancel</button>

                    </div>
                </div>

            </div>
        )
    }
    render(){
        if (this.state.edit) {
            return(this.renderForm());
        } else {
            return(this.renderRecord());
        }

    }
}

export default Address;



