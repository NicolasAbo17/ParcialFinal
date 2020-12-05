import React from 'react';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokemones from "./components/Pokemon/Pokemones";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/">
         <Pokemones lang = {props.lang} /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
