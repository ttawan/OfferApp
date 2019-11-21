import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import TabBarComponent from 'components/TabBarComponent';
import HomeScreen from 'screens/HomeScreen';

const MainTabNavigator = createStackNavigator({
  Home: HomeScreen,
});

export default createBottomTabNavigator(MainTabNavigator, {
  tabBarComponent: props => <TabBarComponent {...props} />,
});
