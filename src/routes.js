import React from "react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './container/App/App';
import Project from './container/project/project'


export default(     
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route  path='/Project' component={Project}/>
        </div>
    </Router>
)