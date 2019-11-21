import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from 'components/Header';

class HomeScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="My Offers" />,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
