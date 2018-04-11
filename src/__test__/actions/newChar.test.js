import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {connect} from 'react-redux';
import * as constants from '../../components/actions/constants';
import * as newCharAction from '../../components/actions/newCharAction';
import * as text from '../../appText/newCharText'
import * as newCharReducer from '../../components/reducers/newCharReducer'

import {NewChar} from '../../components/newChar'

describe('test of new char container',()=>{
    const newChar = shallow(<NewChar />);
    const mockClassSelected = 'Nerd';
    const mockName ='Bente Bongo';

    it('renders like normal snapshot test',()=>{
        expect(newChar).toMatchSnapshot();
    })
    it('Selector Action Class is returned when selected',()=>{   
        const expectedActionReturn = {
            type: constants.CLASS_SELECTED,
            selectedclass: mockClassSelected,
        };
        expect(newCharAction.classSelected(mockClassSelected)).toEqual(expectedActionReturn)
    })
    it('Selector Reducer reducer returns informaiton on class and sets it to state',()=>{
        let testAction = newCharAction.classSelected(mockClassSelected)
        expect(newCharReducer.charClass( undefined, testAction ))
        .toEqual(mockClassSelected)
    })
    it('InputName Action sends action correctly when changing the input field',()=>{
        const expectedActionReturn = {
            type: constants.INPUT_NAME,
            name: mockName,
        }
        expect(newCharAction.inputName(mockName)).toEqual(expectedActionReturn)
    })
    it('InputName Reducer sends Name to the state via reducer',()=>{
        let testAction = newCharAction.inputName( mockName);
        expect(newCharReducer.charName(undefined, testAction)).toEqual(mockName)
    })
})
describe('new char has been filled out and bottom has been pressed', ()=>{
    const mockName = 'John Band'
    const mockclass ='Girl Scout'
    const expectedReturn ={
    name: mockName,
    class: mockclass,
    items:constants.girlScoutItems, 
    stats: constants.girlScoutStats,
    }
    const expectedAction ={
        type: constants.NEW_CHAR_CREATED,
        name: mockName,
        class: mockclass,
    }
    it('CreateChar Action, takes in relevant data',()=>{
        expect(newCharAction.createCharAction(mockName, mockclass)).toEqual(expectedAction)
        })
    it('CreatePlayer Reducer: returns a new player to state with the relevant data',()=>{
        expect(newCharReducer.createChar(undefined, expectedAction)).toEqual(expectedReturn)
    })
})