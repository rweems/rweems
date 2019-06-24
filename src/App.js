import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/SideNav'
import Home from './components/Home';
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
