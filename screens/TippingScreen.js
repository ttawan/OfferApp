import React, {Component} from 'react';
import {Text} from 'react-native';
import Header from 'components/Header';
import ContentArea from 'components/ContentArea';

class TippingScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="Tipping" />,
  };

  render() {
    return (
      <ContentArea>
        <Text>Tipping Screen</Text>
      </ContentArea>
    );
  }
}

export default TippingScreen;
