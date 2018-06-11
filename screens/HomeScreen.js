import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RecipeList from './RecipeList';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text testID='app-title' style={styles.textStyle}>Top Notch Recipes</Text>
                <RecipeList navigation={this.props.navigation} recipes={[{name: 'Biscuits and Gravy', rating: '3'},{name: 'Tacos', rating: '4'}]}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textStyle: {
        fontSize: 20,
    }
});