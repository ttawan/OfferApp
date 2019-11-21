import Theme from 'theme/core';

export default {
  container: {
    backgroundColor: Theme.primary,
  },
  wrapper: {
    backgroundColor: Theme.primary,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButton: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontSize: Theme.fontSizeSmall,
    paddingTop: 5,
  },
};
