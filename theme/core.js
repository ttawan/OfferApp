const layouts = {
  paddingBase: 10,
};

const colors = {
  red: '#D51F2B',
  white: '#FFFFFF',
  gray: '#CCCCCC',
};

const theme = {
  ...layouts,
  primary: colors.red,
  // Navigation
  activeTintColor: colors.white,
  inactiveTintColor: colors.gray,
  tabBarBackgroundColor: colors.red,

  // Font size
  fontSizeBase: 14,
  fontSizeSmall: 12,
  fontSizeMedium: 18,

  // Font weight
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightBold: '500',
};

export default theme;
