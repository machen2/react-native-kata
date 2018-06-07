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
        <Text key={recipe.name}>{recipe.name}</Text>
    )
}

export default RecipeList;
