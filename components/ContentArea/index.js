import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from 'styles/contentAreaStyle';

const ContentArea = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

ContentArea.propTypes = {
  children: PropTypes.node,
};

ContentArea.defaultProps = {
  children: null,
};

export default ContentArea;
