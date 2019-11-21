import Theme from 'theme/core';
import {Dimensions} from 'react-native';

const SIZE = Dimensions.get('screen');

export default {
  container: {
    backgroundColor: Theme.primary,
  },
  wrapper: {},
  itemCardImage: {
    width: SIZE.width,
    height: SIZE.height / 3,
  },
  contentContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Theme.paddingBase * 2,
  },
};
