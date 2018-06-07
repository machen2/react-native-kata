import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { getAllText } from './helpers/getAllText';

describe('App', () => {
  it('should render app title', () => {
    let wrapper = shallow(<App />);
    expect(getAllText(wrapper)).toContain('Top Notch Recipes');
  });

  it('should pass in recipe props to recipe list', () => {
      let wrapper = shallow(<App />);
      let expectedRecipeProps = [
          {name: 'Biscuits and Gravy'},
          {name: 'Tacos'}
      ];
      expect(wrapper.find('RecipeList').props().recipes).toEqual(expectedRecipeProps);
  });
});
