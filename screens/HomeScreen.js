import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Linking,
  View,
  TouchableOpacity,
} from 'react-native';
import Header from 'components/Header';
import Text from 'components/Text';
import styles from 'styles/homeScreenStyles';
import globalStyles from 'styles/globalStyles';
import UnderlineIcon from 'assets/icons/underline.svg';
import Theme from 'theme/core';

const URL = 'https://github.com/ttawan';

class HomeScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="Home" />,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.wrapper}
          contentContainerStyle={styles.contentContainerStyle}>
          <Text.Display style={globalStyles.textWhite}>Hello,</Text.Display>
          <Text.Display style={globalStyles.textWhite}>
            Signature Hospitality Group
          </Text.Display>
          <UnderlineIcon fill={Theme.primary} width={220} height={20} />
          <View style={{height: 300}} />
          <TouchableOpacity onPress={() => Linking.openURL(URL)}>
            <Text.Headline style={globalStyles.textWhite}>
              Built with love by Tim Tawan
            </Text.Headline>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
