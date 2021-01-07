import React from 'react';
import {createDrawnNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';

export const AppDrawnNavigator=createDrawnNavigator(
{
    Home:{screen:AppTabNavigator},  
},

{
    contentComponent:CustomSideBarMenu
},

{
    initialRouteName:'Home'
}


)