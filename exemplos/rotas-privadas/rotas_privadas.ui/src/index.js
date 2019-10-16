import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//paginas
import App from './pages/login/App';
import Categorias from "./pages/categorias/CategoriasAdmin";

import CategoriasAdmin from "./pages/categorias/CategoriasAdmin";
import CategoriasComum from "./pages/categorias/CategoriasComum";

//importando rotas
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import { parseJwt } from './services/auth';

const PermissaoComum = ({ component: Component}) => (
    <Route 
        render={
            props =>
                parseJwt().Permissao === "COMUM" ? (
                    <PermissaoComum {...props} />
                ) : (
                    <CategoriasAdmin {...props} />
                )
        }
    />
);


const routing = (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <PermissaoComum path='/categorias' component={CategoriasComum}/>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
