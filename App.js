import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppDrawnNavigator} from './components/AppDrawenNavigator';

export default function App() {
  return (
   
   <AppContainer />
  );
}

const SwitchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawnNavigator}
})


 const AppContainer=createAppContainer(SwitchNavigator);
