import React from 'react';
import ReacDOM from 'react-dom';
import { HashRouter as Router, Route  } from 'react-router-dom';
import App from "./App";
// import Edit from './components/edit';
// import  Create from './components/create';
import Show from './components/Show';

ReacDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/show/:id' component={Show} />
        </div>
    </Router>
    ,document.getElementById('root'));
