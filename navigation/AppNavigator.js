import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import TabBar from 'components/TabBar';
import HomeScreen from 'screens/HomeScreen';
import Theme from 'theme/core';

import IconHome from 'assets/icons/home.svg';
import IconOffer from 'assets/icons/offer.svg';
import IconTipping from 'assets/icons/tipping.svg';
import IconBook from 'assets/icons/book.svg';
import IconMore from 'assets/icons/more.svg';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => (
    <IconHome
      fill={focused ? Theme.activeTintColor : Theme.inactiveTintColor}
      width={34}
      height={27}
    />
  ),
};

const OfferStack = createStackNavigator({
  Offer: HomeScreen,
});

OfferStack.navigationOptions = {
  tabBarLabel: 'Offer',
  tabBarIcon: ({focused}) => (
    <IconOffer
      fill={focused ? Theme.activeTintColor : Theme.inactiveTintColor}
      width={26}
      height={27}
    />
  ),
};

const TippingStack = createStackNavigator({
  Tipping: HomeScreen,
});

TippingStack.navigationOptions = {
  tabBarLabel: 'Tipping',
  tabBarIcon: ({focused}) => (
    <IconTipping
      fill={focused ? Theme.activeTintColor : Theme.inactiveTintColor}
      width={24}
      height={25}
    />
  ),
};

const BookingStack = createStackNavigator({
  Booking: HomeScreen,
});

BookingStack.navigationOptions = {
  tabBarLabel: 'Book',
  tabBarIcon: ({focused}) => (
    <IconBook
      fill={focused ? Theme.activeTintColor : Theme.inactiveTintColor}
      width={24}
      height={25}
    />
  ),
};

const MoreStack = createStackNavigator({
  More: HomeScreen,
});

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({focused}) => (
    <IconMore
      fill={focused ? Theme.activeTintColor : Theme.inactiveTintColor}
      width={20}
      height={20}
    />
  ),
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      HomeStack,
      OfferStack,
      TippingStack,
      BookingStack,
      MoreStack,
    },
    {
      tabBarComponent: props => <TabBar {...props} />,
    },
  ),
);