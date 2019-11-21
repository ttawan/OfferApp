import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from 'styles/headerStyle';
import Theme from 'theme/core';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Header</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
