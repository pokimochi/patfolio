import React from 'react';
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Illustrations from './components/Illustrations/Illustrations';
import Animations from './components/Animations/Animations';
import About from './components/About/About';

function App() {
  return (
    <div id="App">
      <Router>
        <Navbar />
        <div className="main">
          <Switch>
            <Route path="/illustrations">
              <Illustrations />
            </Route>
            <Route path="/animations">
              <Animations />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Redirect to="/illustrations" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
