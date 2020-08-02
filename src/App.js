import React from 'react';
import NavBar from 'components/layouts/NavBar';
import Home from './components/pages/Home';
import Game from './components/pages/Game';
import About from './components/pages/About/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
        <NavBar title="VGAREUS" titleSmall="VGRUS" icon="fa fa-gamepad"/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path="/Game/:name" component={Game} />
          <Route exact path="/About" component={About} />
        </Switch>
    </Router>
  );
}

export default App;
