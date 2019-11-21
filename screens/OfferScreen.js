import React, {Component} from 'react';
import {Text} from 'react-native';
import Header from 'components/Header';
import ContentArea from 'components/ContentArea';

class OfferScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="My Offers" />,
  };

  render() {
    return (
      <ContentArea>
        <Text>Offer Screen</Text>
      </ContentArea>
    );
  }
}

export default OfferScreen;
