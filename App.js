import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import RecipeDetails from './screens/RecipeDetails';

export default class App extends Component {
  render() {
    return <Rootstack />;
  }
}

const Rootstack = createStackNavigator(
    {
        Home: {
          screen: HomeScreen
        },
        RecipeDetails: {
          screen: RecipeDetails
        }
    },
    {
      initialRouteName: 'Home'
    }
);
