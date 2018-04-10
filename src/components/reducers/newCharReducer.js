import * as constants from '../actions/constants'

export const charClass =(state=  '', action)=>{
    switch(action.type){
        //class selection
        case constants.CLASS_SELECTED:
            return action.selectedclass;
        // returning on default    
        default:
            return state
    }
}

export const charName =(state=  '', action)=>{
    switch(action.type){
        //Name Input 
        case constants.INPUT_NAME:
            return action.name;
        // returning on default    
        default:
            return state
    }
}