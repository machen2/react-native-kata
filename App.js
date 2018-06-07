import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RecipeList from './screens/RecipeList'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text testID='app-title' style={styles.textStyle}>Top Notch Recipes</Text>
        <RecipeList />
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
