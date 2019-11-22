import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import TabNavigator from './TabNavigator';
import OfferDetailScreen from 'screens/OfferDetailScreen';

export default createAppContainer(
  createStackNavigator(
    {
      Main: TabNavigator,
      Detail: createStackNavigator({
        OfferDetailPage: OfferDetailScreen,
      }),
    },
    {
      headerMode: 'none',
    },
  ),
);
