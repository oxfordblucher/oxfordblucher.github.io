import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={[ '/' , '/home' ]} component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/resume' component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
