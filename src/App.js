import React from 'react';

import './App.css';


import { Switch, Route, Redirect } from "react-router-dom";

import Heading from './Components/heading';
import First from './Components/first';
import "nes.css/css/nes.min.css";




function App() {
  return (
    <div className="App">
      

      <Switch>

        <Route exact path="/" component = {First} />
        <Route exact path="/head" component = {Heading} />
        <Redirect to="/"></Redirect>

      </Switch>
    </div>
  );
}

export default App;
