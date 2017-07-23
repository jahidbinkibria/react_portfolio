import React from "react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './container/App/App';
import Home from './container/Home/Home';

export default(     
    <Router>
        <div>
            <Route exect path="/" component={App}/>
            <App>
                <Route component={Home}/>
            </App>
        </div>
    </Router>
)