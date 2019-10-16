import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Buscar from "./Buscar";

const Rotas = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/buscar/:id" component={Buscar} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(Rotas, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
