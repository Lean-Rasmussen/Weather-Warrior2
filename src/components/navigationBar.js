import React, {Component} from 'react';

class NavBar extends Component{
    constructor(props){
        super(props)
    }
    SetMainScreen(e){
        this.props.SetMainScreens(e);
    }

    render(){
        return(
            <div className="nav-bar">
                <button 
                    onClick= {event => this.SetMainScreen(event.target.id)}  
                    id='Home' className="nav-bar__home">Home
                </button>   
                <div  id='NewChar' className ="nav-bar__new-char">New Char</div>   
                <div  id='Battle' className = "nav-bar __battle">Battle</div>   
            </div>
        )
    }
}


export default NavBar;