import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen'
import HomeScreen from './Screens/HomeScreen'
import DonateScreen from './Screens/DonateScreen'
import NoticeScreen from './Screens/NoticeScreen'
import RegisterScreen from './Screens/RegisterScreen'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import {AppStackNavigator} from './Component/AppStackNavigator'


export default function App() {
  return (
    <AppContainer/>
  )
  }
  const SwitchNavigator = createSwitchNavigator({
    WelcomeScreen:{screen:WelcomeScreen},
    AppStackNavigator:{screen:AppStackNavigator}

  }
  )
  const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
