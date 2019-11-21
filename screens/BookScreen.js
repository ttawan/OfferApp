import React, {Component} from 'react';
import {Text} from 'react-native';
import Header from 'components/Header';
import ContentArea from 'components/ContentArea';

class BookScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="Book" />,
  };

  render() {
    return (
      <ContentArea>
        <Text>Book Screen</Text>
      </ContentArea>
    );
  }
}

export default BookScreen;
