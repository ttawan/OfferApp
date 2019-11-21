import React, {Component} from 'react';
import {Text} from 'react-native';
import Header from 'components/Header';
import ContentArea from 'components/ContentArea';

class HomeScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="Home" />,
  };

  render() {
    return (
      <ContentArea>
        <Text>Home Screen</Text>
      </ContentArea>
    );
  }
}

export default HomeScreen;
