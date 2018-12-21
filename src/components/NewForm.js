import React,{Component} from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";

class NewForm extends Component{
    constructor(){
        super();
        this.state = {
            create: false,
            value1: '',
            value2: '',
            rows2: 1,
            rows1: 1,
            minRows: 1,
            maxRows: 4,
        }
    };
    handleAdd=(e)=>{
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
        axios.post('http://localhost:3000/api/user/'+ this.props.id +'/address', event_data)
            .then(res =>{
                this.props.handleAdd(res.data);
                this.setState({create: false})
            }).catch(error => {
                alert("Error Cannot save address:")
        })
    };
    handleToggle = (e) => {
        e.preventDefault();

        this.setState({create: !this.state.create});
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
    recordValue = (field) =>{
        return ReactDOM.findDOMNode(this.refs[field]).value;
    };
    render(){
        console.log("New forms",this.props);
        if (this.state.create) {
            return(
                <div className="col-md-12 card mr-3 mb-3 animated fadeIn">
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
                                                         className="form-control"
                                                         type="text"
                                                         ref="landmark"
                        />
                        </p>
                        <div className="row">
                            <div className="col-4">
                                <h6 className="inline">City:</h6> <p className="inline card-text">
                                <input name="city"

                                       className="form-control"
                                       type="text"
                                       ref="city"
                                />
                            </p>
                            </div>
                            <div className="col-4">
                                <h6 className="inline">State:</h6> <p className="inline card-text">
                                <input name="state"

                                       className="form-control"
                                       type="text"
                                       ref="state"
                                />
                            </p>
                            </div>
                            <div className="col-4">
                                <h6 className="inline">Country:</h6> <p className="inline card-text">
                                <input name="country"

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

                                       className="form-control"
                                       type="text"
                                       ref="postalCode"
                                />
                            </p>
                            </div>
                            <div className="col-6">
                                <h6 className="inline">Phone:</h6> <p className="inline card-text">
                                <input name="phone"
                                       className="form-control"
                                       type="number"
                                       ref="phone"
                                />
                            </p>
                            </div>
                        </div><br/>
                        <div className="footer mt-auto">
                            <button  className="btn btn-outline-success btn-sm" onClick={this.handleAdd}>Save</button>
                            <button  className="btn  btn-outline-warning btn-sm" onClick={this.handleToggle}>Cancel</button>

                        </div>
                    </div>

                </div>
            )

        }else {

            return (
                <div className="col-md-3 card mr-3 mb-3">
                    <img className="card-img-top pt-2"
                         src="data:image/jpeg;base64,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"
                         alt="Card image cap"/>
                    <div className="card-body d-flex flex-column">

                        <h4 className="card-title"><a>Address</a></h4>

                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of
                            the card's content.</p>
                        <div className="footer mt-auto">
                            <button className="btn btn-outline-info " onClick={this.handleToggle}>Add New</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default NewForm;