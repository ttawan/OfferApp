import Theme from 'theme/core';

export default {
  container: {
    backgroundColor: Theme.primary,
  },
  wrapper: {
    padding: Theme.paddingBase,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  title: {
    color: '#FFFFFF',
    fontSize: Theme.fontSizeMedium,
    fontWeight: Theme.fontWeightBold,
  },
};
