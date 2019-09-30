import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//pages
import App from './pages/Home/App';
import Categorias from './pages/Categorias/Categorias';
import NaoEncontrado from "./pages/NaoEncontrado/NaoEncontrado";

//routes
import { Route, Link, BrowserRouter as Router, Switch} from "react-router-dom";

import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/categorias' component={Categorias} />
                <Route component={NaoEncontrado}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
