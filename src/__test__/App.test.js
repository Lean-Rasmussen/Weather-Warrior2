//module import
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
//import components
import Home from '../components/home';
import {App} from '../App';


const app = shallow(<App />);
const home = shallow(<Home />);

it('App Renders', ()=> {
  expect(app).toMatchSnapshot();
})

it('renders home page correctly',()=>{
  expect(Home).toMatchSnapshot();
});
 

 
 
 