//module import
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
//import components
import NavBar from '../components/navigationBar';
import Home from '../components/home';
import App from '../App';



const app = mount(<App />);
const navBar = mount(<NavBar />);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('App Renders', ()=> {
  expect(app).toMatchSnapshot();
})


it('Navbar renders', ()=> {
  expect(navBar).toMatchSnapshot();
})

it('renders home page correctly',()=>{
  expect(Home).toMatchSnapshot();
});

it("initialises state",()=> {
  expect(app.state().activeScreen).toEqual('')
});


