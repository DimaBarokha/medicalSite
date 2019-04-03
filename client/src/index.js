import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from "./App";

import Register from "./components/Register/RegistPatient";
import NotFound from './components/NotFound'
import registerServiceWorker from './registerServiceWorker';
//Styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './assets/main.scss'
import "./assets/_404page.scss"

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/register" component={Register}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();

 