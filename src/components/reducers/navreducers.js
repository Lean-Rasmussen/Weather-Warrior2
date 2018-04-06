import * as constants from '../actions/constants'

const ScreenReducer =(state= 'Home', action) =>{
    switch(action.type){
        case constants.SET_SCREEN:
            console.log(action)
            return action.mainScreen;
        default: 
            console.log("default from NavReducer ACTION!!")
            return state;
            
    }
}

export default ScreenReducer;