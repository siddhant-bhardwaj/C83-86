import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import donationScreen from '../screens/donationScreen';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';

export const AppStackNavigator=createStackNavigator({
    BookDonateScreen:{
        screen:BookDonateScreen,
        navigationOptions:{headerShown:false}
    },

    ReceiverDetailsScreen:{
        screen:ReceiverDetailsScreen,
        navigationOptions:{headerShown:false}
    }



},

{
    initialRouteName: 'donationScreen',
}

)