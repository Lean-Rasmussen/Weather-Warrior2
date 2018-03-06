import React, { Component } from 'react';
//import styles
import './App.css';
//import components
import NavBar from './components/navigationBar';
import Battle from './components/battle';
import Home from './components/home';
import NewChar from './components/newChar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Gif warrior 2.0 </h1>
        <h3> time to get giffing</h3>
        <NavBar />
      </div>
    );
  }
}

export default App;