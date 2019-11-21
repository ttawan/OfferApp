import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import TabBarComponent from 'components/TabBarComponent';
import HomeScreen from 'screens/HomeScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(
  createBottomTabNavigator(
    {
      Main: AppNavigator,
    },
    {
      tabBarComponent: props => <TabBarComponent {...props} />,
    },
  ),
);
