//this describes the test for the navigation bar.
//module import
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {connect} from 'react-redux';
import * as constants from '../../components/actions/constants';
import * as navigationActions from '../../components/actions/navigationActions';
import NavReducers from '../../components/reducers/navreducers';

import { NavBar } from '../../components/navigationBar';

describe('navbar renderes',()=>{
    const navBar = shallow(<NavBar  />);

    it('tests reducers to return empty state when no state is defined', () => {
        let state;
        state = NavReducers(undefined, {});
        expect(state).toEqual(undefined);
      });
      
    
    it('Navbar renders', ()=> {
        expect(navBar).toMatchSnapshot();
    })
     it('When clicking an item the main screen changes',() =>{
         const mockScreen = 'mockScreen';
         const expectedAction = {type:constants.SET_SCREEN, mainScreen: mockScreen};
         expect(navigationActions.mainScreen(mockScreen)).toEqual(expectedAction);
     })
     it('reducer sendes change to mainscreen from navbar action',()=>{
         const testScreen = 'testScreen';
         expect(NavReducers(undefined, {
             type:constants.SET_SCREEN,
             mainScreen: testScreen,
         })).toEqual(testScreen);
     })
});
