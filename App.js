import 'react-native-gesture-handler';

import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import AppNavigator from './navigation/AppNavigator';

import {Provider} from 'react-redux';
import configureStore from './configureStore';

const store = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
