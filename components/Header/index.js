import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, SafeAreaView} from 'react-native';
import styles from 'styles/headerStyle';

const Header = ({children, title}) => {
  return (
    <SafeAreaView style={styles.container}>
      {!title ? (
        children
      ) : (
        <View style={styles.wrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: null,
};

export default Header;
