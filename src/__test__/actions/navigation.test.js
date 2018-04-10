//this describes the test for the navigation bar.
//module import
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {connect} from 'react-redux';
import * as constants from '../../components/actions/constants';
import * as NavigationActions from '../../components/actions/navigationActions';
import NavReducers from '../../components/reducers/navreducers';

import { NavBar } from '../../components/navigationBar';

describe('navbar renderes',()=>{
    const navBar = shallow(<NavBar  />);

    it('Home is rendered when no state is defined', () => {
        let state = NavReducers(undefined, {});
        expect(state).toEqual('Home');
      });
      
    
    it('Navbar renders', ()=> {
        expect(navBar).toMatchSnapshot();
    })
     it('When clicking an item the main screen changes',() =>{
         const mockScreen = 'mockScreen';
         const expectedAction = {type:constants.SET_SCREEN, mainScreen: mockScreen};
         expect(NavigationActions.navAction(mockScreen)).toEqual(expectedAction);
     })
     it('reducer sendes change to mainscreen from navbar action',()=>{
         const testScreen = 'testScreen';
         let testAction = NavigationActions.navAction(testScreen)
         expect(NavReducers(undefined, testAction )).toEqual(testScreen);
     })
});
