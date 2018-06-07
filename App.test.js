import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should render app title', () => {
    let wrapper = shallow(<App />);
    expect(getAllText(wrapper)).toContain('Top Notch Recipes');
  });
});

function getAllText(wrapper) {
    return wrapper.find('Text').reduce((prev, curr) => prev + curr.dive().text(), '');
}