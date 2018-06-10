import React from 'react';
import { View, Text } from 'react-native';

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
            <Text key={recipe.name}>{recipe.name}</Text>
            <Text key={recipe.rating}>Average Rating: {recipe.rating}</Text>
        </View>
    )
}

export default RecipeList;
