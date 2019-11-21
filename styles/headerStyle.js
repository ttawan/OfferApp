import Theme from 'theme/core';

export default {
  container: {
    backgroundColor: Theme.primary,
  },
  wrapper: {
    padding: Theme.paddingBase,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    position: 'relative',
  },
  title: {
    color: '#FFFFFF',
    fontSize: Theme.fontSizeMedium,
    fontWeight: Theme.fontWeightBold,
  },
  backIcon: {
    left: Theme.paddingBase,
    top: Theme.paddingBase + 5,
    width: 20,
    height: 20,
    position: 'absolute',
  },
};
