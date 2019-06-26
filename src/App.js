import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/SideNav'
import Home from './components/Home';
import Projects from './components/Projects'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import image from "./images/me.jpg"


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <img src={image} />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
