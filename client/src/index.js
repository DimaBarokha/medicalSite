import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/NotFound'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {store} from "./components/store";
//Styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './assets/main.scss'
import "./assets/_404page.scss"

const App = lazy(() => import('./App'));
const Register = lazy(() => import ('./components/Register'));
const cube =
    <div className="load">
        <hr/>
        <hr/>
        <hr/>
        <hr/>
    </div>

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Suspense fallback={cube}>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/register" component={Register}/>
                    <Route component={NotFound}/>
                </Switch>
            </Suspense>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

 