import React, {Component} from 'react';

class NavBar extends Component{
    render(){
        return(
            <div className="nav-bar">
                <div className="nav-bar__home" >Home</div>   
                <div className ="nav-bar__new-char">New Char</div>   
                <div className = "nav-bar __battle">Battle</div>   
            </div>
        )
    }
}

export default NavBar;