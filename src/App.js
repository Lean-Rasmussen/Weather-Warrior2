import React, { Component } from 'react';
import {connect} from 'react-redux';
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
        <div className='header'>
          <h1> Gif warrior 2.0 </h1>
          <h3> time to get giffing</h3>
        </div>
        <NavBar SetMainScreens ={setMainScreen} />
        <div className ="main-screan">
          <Home />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    activeScreen: '',
  }
}
export default App;