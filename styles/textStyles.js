import Theme from 'theme/core';

const lineHeight = 1.5;

export default {
  textNormal: {
    fontSize: Theme.fontSizeBase,
    lineHeight: Theme.fontSizeBase * (lineHeight * 1.2),
  },
  textHeadline: {
    fontSize: Theme.fontSizeMedium,
    fontWeight: Theme.fontWeightBold,
    lineHeight: Theme.fontSizeBase * (lineHeight * 2),
    textTransform: 'uppercase',
  },
  textSubHeadline: {
    fontSize: Theme.fontSizeBase,
    fontWeight: Theme.fontWeightBold,
    lineHeight: Theme.fontSizeBase * (lineHeight * 2),
  },
  textDisplay: {
    fontSize: Theme.fontSizeBase * 2,
    lineHeight: Theme.fontSizeBase * (lineHeight * 1.8),
  },
};
