//this describes the test for the navigation bar.
//module import
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import NavBar from '../../components/navigationBar';

const navBar = shallow(<NavBar />);


it('Navbar renders', ()=> {
    expect(navBar).toMatchSnapshot();
})
