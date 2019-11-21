import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, View, SafeAreaView} from 'react-native';
import styles from 'styles/headerStyle';
import BackIcon from 'assets/icons/close.svg';
 
const Header = ({goBack, title}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {goBack && (
          <TouchableOpacity onPress={goBack} style={styles.backIcon}>
            <BackIcon fill="#FFFFFF" width={13} height={12} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  goBack: PropTypes.func,
};

Header.defaultProps = {
  title: null,
  goBack: null,
};

export default Header;
