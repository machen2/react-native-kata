import React from 'react';
import HomeScreen from './HomeScreen';
import { shallow } from 'enzyme';
import { getAllText } from '../helpers/getAllText';

describe('HomeScreen', () => {
  it('should render app title', () => {
    let wrapper = shallow(<HomeScreen />);
    expect(getAllText(wrapper)).toContain('Top Notch Recipes');
  });

  it('should pass in recipe props to recipe list', () => {
      let expectedRecipeProps = [
          {name: 'Biscuits and Gravy', rating: '3'},
          {name: 'Tacos', rating: '4'}
      ];
      let wrapper = shallow(<HomeScreen />);
      expect(wrapper.find('RecipeList').props().recipes).toEqual(expectedRecipeProps);
  });
});
