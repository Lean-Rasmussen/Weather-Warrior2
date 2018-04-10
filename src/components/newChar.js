import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from'redux';
import * as text from '../appText/newCharText';

//import actions 
import * as NewCharAction from './actions/newCharAction';



export class NewChar extends Component{
    render(){
        let classText = text.defaultClassText; 
        const SelectedClass = this.props.SelectedClass;
          if(!SelectedClass ){
            classText = text.defaultClassText
          }else if(SelectedClass === 'Nerd'){
            classText = text.Nerd}
            else if(SelectedClass === 'Girl Scout'){
                classText = text.girlScout}
            else if(SelectedClass === 'Shovel Kid'){
                    classText = text.shovelKid}
            else if(SelectedClass === 'Collector'){
                    classText = text.Collector}
            else if(SelectedClass === 'Fat Kid'){
                    classText = text.FatKid}

        return(
            <div>
                <div>
                    <h1>Make a new Guy</h1>
                </div>
                <div>
                    <p> Name: {this.props.SelectedName}</p> 
                    <input class='NewChar__input' onChange={(event)=>this.props.Name(event.target.value)}/>
                    <p> Class </p>
                    <select onChange={(event)=>this.props.classSelector(event.target.value)}>
                        <option> Pick a class </option>
                        <option id='Nerd'> Nerd </option>
                        <option id='Girl Scout'> Girl Scout </option>
                        <option id='Shovel kid'> Shovel Kid</option>
                        <option id='Collector'> Collector</option>
                        <option id='Fat Kid'> Fat Kid</option>  
                    </select>
                    <div>
                        <p>{classText}</p>
                    </div>
                    <button> OK yea I made my guy </button>
                </div>
                <div> here goes your hero gif</div>    
            </div>
        )
    }
}
// Do your state need to be put into props via MapState or can it be done though MapDispatchToState??
function MapStateToProps(state){
    return{
        SelectedClass :state.SelectedClass,
        SelectedName : state.Name,
    }
}
function MapDispatchToProps(dispatch){
    return bindActionCreators({
        classSelector: NewCharAction.classSelected,
        Name: NewCharAction.inputName,
    }, dispatch);
}

export default connect(MapStateToProps, MapDispatchToProps)(NewChar);