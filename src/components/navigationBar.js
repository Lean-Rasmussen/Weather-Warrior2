import React, {Component} from 'react';
import {connect} from 'react-redux';
import { navAction } from "./actions/navigationActions" 
import {bindActionCreators} from 'redux';


class NavBar extends Component{

    render(){
        return(
            <div className="nav-bar">
                <div 
                    id='Home' className="nav-bar__home"
                    onClick= {(event)=>this.props.mainScreen(event.target.id)}    
                    >Home
                </div>   
                <div 
                    id='NewChar' className ="nav-bar__new-char"  
                    onClick= {(event)=>this.props.mainScreen(event.target.id)} 
                    >New Char</div>   
                <div  
                    id='Battle' className = "nav-bar __battle"  
                    onClick= {(event)=>this.props.mainScreen(event.target.id)}
                    >Battle</div> 
            </div>
        )
    }
}
function MapStateToProps(state){
    return{
    ScreenOfChoice: state.ActiveScreen,
    }
}

//anything returned from this function will end up as props on navigationBar container
function MapDispatchToProps(dispatch){
//when a new screen is pressed, the screen should be passed to the reducers though the action.
  return bindActionCreators({mainScreen: navAction}, dispatch);
}

export default connect(MapStateToProps, MapDispatchToProps)(NavBar);