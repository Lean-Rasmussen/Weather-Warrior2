import { combineReducers } from 'redux';
import NavReducers from './navreducers';
import * as newCharReducer from './newCharReducer';

const rootReducer = combineReducers({
    //Nav reducers
    ActiveScreen: NavReducers,
    //New char page reducers
    SelectedClass :newCharReducer.charClass,
    Name : newCharReducer.charName,
    player: newCharReducer.createChar,

});
export default rootReducer;