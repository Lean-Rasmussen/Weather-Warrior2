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
        let classGif = ''
          if(!SelectedClass ){
            classText = text.defaultClassText
          }else if(SelectedClass === 'Nerd'){
            classText = text.Nerd
            classGif = 'https://media.giphy.com/media/3o7aTKs8feSRjXY3Cg/giphy.gif';
            }
            else if(SelectedClass === 'Girl Scout'){
                classText = text.girlScout
                classGif ='https://media.giphy.com/media/AbKlwKEiP4ZpK/giphy.gif';
            }
            else if(SelectedClass === 'Sports Prodegy'){
                    classText = text.sportsProdegy
                    classGif = "https://media.giphy.com/media/rdgQiSrZPNcRO/giphy.gif";
                }
            else if(SelectedClass === 'Collector'){
                    classText = text.Collector
                    classGif = 'https://media.giphy.com/media/T2rCOeQSMRUDm/giphy.gif';
                }
            else if(SelectedClass === 'Fat Kid'){
                    classText = text.FatKid
                    classGif = "https://media.giphy.com/media/fQ4neZmCTGnhC/giphy.gif";
                }
        return(
            <div className='new-char'>
                <div className='new-char__headline'>
                    <h1>Make a new Guy</h1>
                </div>
                <div className='new-char__name-input'>
                    <p> Name: {this.props.SelectedName}</p> 
                    <input class='NewChar__input' onChange={(event)=>this.props.Name(event.target.value)}/>
                    <p> Class </p>
                    <select onChange={(event)=>this.props.classSelector(event.target.value)}>
                        <option> Pick a class </option>
                        <option id='Nerd'> Nerd </option>
                        <option id='Girl Scout'> Girl Scout </option>
                        <option id='Sports Prodegy'> Sports Prodegy</option>
                        <option id='Collector'> Collector</option>
                        <option id='Fat Kid'> Fat Kid</option>  
                    </select>
                    <div>
                            <p>{classText}</p>
                    </div>
                </div>
                <iframe className='new-char__gif' src={classGif} width="300" height="300"></iframe>
                <div className='new-char__btn'>
                    <button onClick={()=>this.props.player(this.props.SelectedName, SelectedClass)}> OK yea I made my guy </button>
                </div>
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
        player: NewCharAction.createCharAction,
    }, dispatch);
}

export default connect(MapStateToProps, MapDispatchToProps)(NewChar);