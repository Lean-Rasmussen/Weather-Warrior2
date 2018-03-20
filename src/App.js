import React, { Component } from 'react';
//import styles
import './styles/index.css';
//import components
import NavBar from './components/navigationBar';
import Battle from './components/battle';
import Home from './components/home';
import NewChar from './components/newChar';

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      activeScreen :''

    }
  }
  setMainScreen(term){
    this.setState({activeScreen: term})
    console.log(this.state.activeScreen)
  };

  render() {
    const setMainScreen=(term) => {this.setMainScreen(term)}

    return (
      <div className="App">
        <h1> Gif warrior 2.0 </h1>
        <h3> time to get giffing</h3>
        <NavBar SetMainScreens ={setMainScreen} />
        <Home />
      </div>
    );
  }
}

export default App;