import * as constants from '../actions/constants'

const newCharReducer =(state=  '', action)=>{
    switch(action.type){
        //class selection
        case constants.CLASS_SELECTED:
            return action.selectedclass;
        //Name Input 
        case constants.INPUT_NAME:
            return action.name;
        // returning on default    
        default:
            return state
    }
}

export default newCharReducer;