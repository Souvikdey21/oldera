import React from 'react';

import './App.css';


import { Switch, Route, Redirect } from "react-router-dom";

import Heading from './Components/heading';
import First, { Name } from './Components/first';
import NavBar from "./Components/nav";
import Menu from './Components/MenuComponent';
import Calculator from './Components/Calculator';
import Notepad from './Components/Notepad';
import ToDo from './Components/ToDo';


import "nes.css/css/nes.min.css";




function App() {
  return (
    <div className="App">

    <br />
      <Switch>

        <Route exact path="/" component = {First} />
        <Route exact path="/head" component = {Heading} />
        <Route exact path="/menu" component={() => <Menu name={Name} />} />
        <Route exact path="/calculator" component = {() => <Calculator />} />
        <Route exact path="/notepad" component = {() => <Notepad />} />
        <Route exact path="/todo" component={() => <ToDo />} />
        <Redirect to="/"></Redirect>

      </Switch>
    </div>
  );
}

export default App;
