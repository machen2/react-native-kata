import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RecipeDetails from './RecipeDetails';

const RecipeList = (props) => {
    return (
        <View testID='recipe-list'>
            {renderRecipes(props)}
        </View>
    );
};

function renderRecipes(props) {
    return props.recipes.map(recipe =>
        <View key={recipe.name}>
            <TouchableOpacity key={recipe.name} onPress={() => props.navigation.navigate('RecipeDetails')}>
                <Text>{recipe.name}</Text>
            </TouchableOpacity>
            <Text key={recipe.rating}>Average Rating: {recipe.rating}</Text>
        </View>
    )
}

export default RecipeList;
