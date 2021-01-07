import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from '/react-navigation-tabs';
import {DonationScreen} from '../screens/donationScreen';
import {RequestScreen} from '../screens/requestScreen';

export const AppTabNavigator=createBottomTabNavigator({
    donationScreen:{
        screen:DonationScreen,
        navigationOptions:{
            tabBarIcon:<Image 
            source={require('../assest/request-list.png')}
            style={{width:20, height:20}}
            />,
            tabBarLabel:'Donate Items'

        }
    },

    requestScreen:{
        screen:RequestScreen,
        navigationOptions:{
            tabBarIcon:<Image 
            source={require('../assest/request-book.png')}
            style={{width:20, height:20}}
            />,
            tabBarLabel:'Request Items'

        }
    }

})