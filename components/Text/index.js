import React from 'react';
import PropTypes from 'prop-types';
import {Text as RNText} from 'react-native';
import styles from 'styles/textStyles';

const Text = ({children, style}) => {
  return <RNText style={[styles.textNormal, style]}>{children}</RNText>;
};

Text.Headline = ({children, style}) => (
  <Text style={[styles.textHeadline, style]}>{children}</Text>
);

Text.SubHeadline = ({children, style}) => (
  <Text style={[styles.textSubHeadline, style]}>{children}</Text>
);

Text.Display = ({children, style}) => (
  <Text style={[styles.textDisplay, style]}>{children}</Text>
);

const propTypes = {
  children: PropTypes.string,
};

const defaultProps = {
  children: null,
};

Text.propTypes = propTypes;
Text.SubHeadline.propTypes = propTypes;
Text.Headline.propTypes = propTypes;

Text.defaultProps = defaultProps;
Text.SubHeadline.defaultProps = defaultProps;
Text.Headline.defaultProps = defaultProps;

export default Text;
