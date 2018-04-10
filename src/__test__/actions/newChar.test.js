import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {connect} from 'react-redux';
import * as constants from '../../components/actions/constants';
import * as newCharAction from '../../components/actions/newCharAction';
import * as text from '../../appText/newCharText'
import newCharReducer from '../../components/reducers/newCharReducer'

import {NewChar} from '../../components/newChar'

describe('test of new char container',()=>{
    const newChar = shallow(<NewChar />);

    it('renders like normal snapshot test',()=>{
        expect(newChar).toMatchSnapshot();
    })
    it('Selector Action Class is returned when selected',()=>{
        const mockClassSelected = 'Nerd';
        const expectedActionReturn = {
            type: constants.CLASS_SELECTED,
            selectedclass: mockClassSelected,
        };
        expect(newCharAction.classSelected(mockClassSelected)).toEqual(expectedActionReturn)
    })
    it('Selector Reducer reducer returns informaiton on class and sets it to state',()=>{
        const mockClassSelected = 'Nerd';
        let testAction = newCharAction.classSelected(mockClassSelected)
        expect(newCharReducer( undefined, testAction ))
        .toEqual(mockClassSelected)
    })
    it('InputName Action sends action correctly when changing the input field',()=>{
        const mockName= 'Johnathan'
        const expectedActionReturn = {
            type: constants.INPUT_NAME,
            name: mockName,
        }
        expect(newCharAction.inputName(mockName)).toEqual(expectedActionReturn)
    })
    it('InputName Reducer sends Name to the state via reducer',()=>{
        const mockName ='Bente Bongo';
        let testAction = newCharAction.inputName( mockName);
        expect(newCharReducer(undefined, testAction)).toEqual(mockName)
    })
})
