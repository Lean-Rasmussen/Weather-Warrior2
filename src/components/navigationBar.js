import React, {Component} from 'react';
import {connect} from 'react-redux';
import { navAction } from "./actions/navigationActions" 
import {bindActionCreators} from 'redux';
import MaterialIcon, {colorPallet} from 'material-icons-react';


export class NavBar extends Component{

    render(){
        return(
            <div className="nav-bar">
                <div 
                    id='Home' className="nav-bar__item"
                    onClick= {()=>this.props.mainScreen('Home')}>
                    <MaterialIcon class='nav-bar__item-icon' size='large' icon="home" />
                    <p>Home</p>
                </div>
                
                <div 
                    id='NewChar' className ="nav-bar__item"  
                    onClick= {()=>this.props.mainScreen('NewChar')}> 
                        <MaterialIcon class='nav-bar__item-icon' size='large' icon="person" />
                        <p>New guy</p>
                    </div>   
                <div  
                    id='Battle' className = "nav-bar__item"  
                    onClick= {()=>this.props.mainScreen('Battle')}>
                        <MaterialIcon class='nav-bar__item-icon' size='large' icon="restaurant" />
                        <p>Battle</p>
                    </div> 
                <div 
                    id='Info' className="nav-bar__item"
                    onClick= {()=>this.props.mainScreen('Info')}>
                        <MaterialIcon class='nav-bar__item-icon' size='large' icon="info" />  
                        <p>Game Info</p> 
                    </div>
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
  return bindActionCreators({
      mainScreen: navAction
    }, dispatch);
}

export default connect(MapStateToProps, MapDispatchToProps)(NavBar);