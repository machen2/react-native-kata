import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { getAllText } from './helpers/getAllText';


describe('App', () => {
  it('should render app title', () => {
    let wrapper = shallow(<App />);
    expect(getAllText(wrapper)).toContain('Top Notch Recipes');
  });
});
