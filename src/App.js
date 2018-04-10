import React, { Component } from 'react';
import {connect} from 'react-redux';
//import styles
import './styles/index.css';
//import components
import NavBar from './components/navigationBar';
import Battle from './components/battle';
import Home from './components/home';
import NewChar from './components/newChar';
import Info from './components/info';



export class App extends Component {

  render() {
    let activeScreen = null; 
    const SS = this.props.ScreenChange;
      if(!SS || SS === 'Home' ){
        activeScreen = <Home />
      }else if(SS === 'Battle'){
        activeScreen = <Battle />
      }else if(SS === 'NewChar'){
        activeScreen= <NewChar />
      }else if(SS === 'Info'){
        activeScreen = <Info />
      }
      else{
        activeScreen= <Home />
      }

    return (
      <div className="App">
        <div className='header'>
          <h1> Gif warrior 2.0 </h1>
          <h3> time to get giffing</h3>
        </div>
        <NavBar  />
        <div className ="main-screan">
          {activeScreen}
        </div>
      </div>
    );
  }
}

function MapStateToProps(state){
  //what ever is returned from here wil show up as props
  return{
    ScreenChange: state.ActiveScreen,
  }
}

export default connect(MapStateToProps)(App);