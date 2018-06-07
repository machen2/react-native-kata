import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from './RecipeList';
import { getAllText } from '../helpers/getAllText';

describe('Recipe List', () => {
    it('should have a recipe name', () => {
        let wrapper = shallow(<RecipeList recipes={[{name: 'Biscuits and Gravy'}]}/>);
        expect(getAllText(wrapper)).toContain('Biscuits and Gravy');
    });

    it('should have another recipe name', () => {
        let wrapper = shallow(<RecipeList recipes={[{name: 'Tacos'}]}/>);
        expect(getAllText(wrapper)).toContain('Tacos');
    });
});
