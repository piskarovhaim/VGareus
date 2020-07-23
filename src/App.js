import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage'
import Game from './VGDetails'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Game/:name" exact component={Game} />
        </Switch>
    </Router>
    
  );
}

export default App;
