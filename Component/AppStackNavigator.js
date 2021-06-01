import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import DonateScreen from '../Screens/DonateScreen'
import NoticeScreen from '../Screens/NoticeScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import HomeScreen from '../Screens/HomeScreen'

export const AppStackNavigator =  createStackNavigator({
    HomeScreen:{screen:HomeScreen},
    DonateScreen:{screen:DonateScreen},
    RegisterScreen:{screen:RegisterScreen},
    NoticeScreen:{screen:NoticeScreen}
})