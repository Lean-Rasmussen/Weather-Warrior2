//import modules
import React, {Component} from 'react';

class PlayerStats extends Component {


    render(){
        return(
            <div>
                <p>Vitality: {this.props.data} </p>
                <p>Strength </p>
                <p>Intelligence </p>
                <p>Street Smarts </p>
            </div>
        )
    }
} 
export default PlayerStats