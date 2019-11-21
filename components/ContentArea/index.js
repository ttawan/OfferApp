import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from 'styles/contentAreaStyle';

const ContentArea = ({children, noPadding}) => {
  return (
    <View
      style={[styles.container, noPadding ? styles.noPadding : styles.padding]}>
      {children}
    </View>
  );
};

ContentArea.propTypes = {
  children: PropTypes.node,
  noPadding: PropTypes.bool,
};

ContentArea.defaultProps = {
  children: null,
  noPadding: false,
};

export default ContentArea;
