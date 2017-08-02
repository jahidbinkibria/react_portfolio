import React from "react";
import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom';

import App from './container/App/App';
import Home from './container/Home/Home';
import Project from './container/project/project'


export default(     
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route exact path='/' component={Home}/>
            <Route  path='/Project' component={Project}/>
        </div>
    </Router>
)