import React, { Component } from 'react';
import BasicExample from './BasicExample'
class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>CRUD with axios</h1>
                <BasicExample/>
            </div>
        );
    }
}
export default App;