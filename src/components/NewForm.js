import React,{Component} from 'react';
import axios from 'axios';

class NewForm extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            details: '',
            create: false
        };
    }
    onChange = (e) =>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    handleAdd = (e) =>{
        e.preventDefault();
        const {name,details} = this.state;
        if(this.validForm()) {
            axios.post('http://localhost:3000/api/item', {name, details})
                .then((res) => {
                    this.props.handleAdd(res.data);
                    this.setState({name: '', details:'',create: false});
                });
        }else {
            alert("Please Enter all Field");
        }
    }
        validForm(){
        if (this.state.name && this.state.details) {
            return true;
        } else {
            return false;
        }
    }
    handleToggle = (e) => {
        e.preventDefault();

        this.setState({create: !this.state.create});
    };

    render(){
        var animate = this.state.create ? 'container animated fadeIn' : '';
        if (this.state.create) {
            const {name, details} = this.state;

            return(
                <div className={animate}>
                    <div className='jumbotron'>
                        <form onSubmit={this.handleAdd}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange}
                                       placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="details">Details:</label>
                                <textarea type="text" name='details' className="md-textarea form-control" rows="5" value={details} onChange={this.onChange}
                                          placeholder="Enter any details"/>
                            </div>
                            <button type="submit" className="btn btn-default">Save</button><button onClick={this.handleToggle} className='btn btn-blue-grey'>Cancel</button>
                        </form>
                    </div>
                </div>
            );
        } else {
            return(
                <div className=''>
                    <button className='btn btn-success' onClick={this.handleToggle}>Create New</button>
                </div>
            );
        }

    }

}

export default NewForm;