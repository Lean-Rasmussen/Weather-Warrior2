import { combineReducers } from 'redux';
import NavReducers from './navreducers';
import newCharReducer from './newCharReducer';

const rootReducer = combineReducers({
    ActiveScreen: NavReducers,
    //New char page reducers
    SelectedClass :newCharReducer,
    Name : newCharReducer,

});
export default rootReducer;