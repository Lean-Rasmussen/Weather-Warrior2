//import modules
import React, {Component} from 'react';

//import components
import PlayerStats from './home/PlayerStats'

class Home extends Component{
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