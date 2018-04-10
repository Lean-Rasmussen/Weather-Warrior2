import { combineReducers } from 'redux';
import NavReducers from './navreducers';
import * as newCharReducer from './newCharReducer';

const rootReducer = combineReducers({
    ActiveScreen: NavReducers,
    //New char page reducers
    SelectedClass :newCharReducer.charClass,
    Name : newCharReducer.charName,

});
export default rootReducer;