import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './components/reducers/reducerindex'

// Heroku https://boiling-inlet-79559.herokuapp.com/

//helper tools
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(rootReducer, devToolsEnhancer())

ReactDOM.render(
   <Provider store ={store}>
        <App />
    </Provider>, document.getElementById('root'));
