import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/buscar/1">BuscarPorId</Link>
      </header>
    </div>
  );
}

export default App;
