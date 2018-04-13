//import modules
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from'redux';

//import components
import PlayerStats from './home/PlayerStats'

export class Home extends Component{
    render(){
        return(
            <div>
                <h1> Home Screen</h1> 
                <PlayerStats data ={40} />
            </div>

           
            
        )
    }
}
export default Home;