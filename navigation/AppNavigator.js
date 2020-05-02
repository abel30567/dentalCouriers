import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import AuthLoading from '../screens/AuthLoading';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Loading: AuthLoading,
      Auth: AuthStack,
      Main: MainTabNavigator,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);
