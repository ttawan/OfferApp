import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import TabNavigator from './TabNavigator';
import OfferDetailContainer from 'containers/OfferDetailContainer';

export default createAppContainer(
  createStackNavigator(
    {
      Main: TabNavigator,
      Detail: createStackNavigator({
        OfferDetailPage: OfferDetailContainer,
      }),
    },
    {
      headerMode: 'none',
    },
  ),
);
