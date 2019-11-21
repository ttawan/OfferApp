import React, {Component} from 'react';
import {Text} from 'react-native';
import Header from 'components/Header';
import ContentArea from 'components/ContentArea';

class MoreScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="More" />,
  };

  render() {
    return (
      <ContentArea>
        <Text>More Screen</Text>
      </ContentArea>
    );
  }
}

export default MoreScreen;
