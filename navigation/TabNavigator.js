import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

// Components
import TabBar from 'components/TabBar';
import Theme from 'theme/core';

// Containers
import HomeContainer from 'containers/HomeContainer';
import OfferScreen from 'screens/OfferScreen';
import TippingScreen from 'screens/TippingScreen';
import BookScreen from 'screens/BookScreen';
import MoreScreen from 'screens/MoreScreen';

// Icons
import IconHome from 'assets/icons/home.svg';
import IconOffer from 'assets/icons/offer.svg';
import IconTipping from 'assets/icons/tipping.svg';
import IconBook from 'assets/icons/book.svg';
import IconMore from 'assets/icons/more.svg';

const HomeStack = createStackNavigator({
  Home: HomeContainer,
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
  Offer: OfferScreen,
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
  Tipping: TippingScreen,
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
  Booking: BookScreen,
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
  More: MoreScreen,
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

export default createBottomTabNavigator(
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
);
