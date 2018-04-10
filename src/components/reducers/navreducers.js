import * as constants from '../actions/constants'

const ScreenReducer =(state= 'Home', action) =>{
    switch(action.type){
        //main screen selector
        case constants.SET_SCREEN:
            return action.mainScreen;
        default: 
            return state;   
    }
}

export default ScreenReducer;