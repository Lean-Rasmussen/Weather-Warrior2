import { combineReducers } from 'redux';
import NavReducers from './navreducers';

const rootReducer = combineReducers({
    ActiveScreen: NavReducers,
});
export default rootReducer;