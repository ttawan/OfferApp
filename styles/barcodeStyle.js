import Theme from 'theme/core';
import {Dimensions} from 'react-native';

const SIZE = Dimensions.get('screen');

export default {
  container: {
    backgroundColor: Theme.white,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: Theme.paddingBase,
  },
  barCodeImage: {
    width: SIZE.width - Theme.paddingBase * 2,
    height: 150,
  },
};
