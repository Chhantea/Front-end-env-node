import React from 'react';
import ReacDOM from 'react-dom';
import { HashRouter as Router, Route  } from 'react-router-dom';
import App from "./App";
// import Edit from './components/edit';
// import  Create from './components/create';
import Details from './components/Details';

ReacDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/show/:id' component={Details} />
        </div>
    </Router>
    ,document.getElementById('root'));
