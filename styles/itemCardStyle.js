import Theme from 'theme/core';
import {Dimensions} from 'react-native';

const SIZE = Dimensions.get('screen');

export default {
  container: {
    backgroundColor: Theme.dark,
  },
  wrapper: {},
  cardImage: {
    width: SIZE.width,
    height: 100,
  },
  itemDivider: {
    height: 10,
  },
};
