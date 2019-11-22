import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import Header from 'components/Header';
import Text from 'components/Text';
import ContentArea from 'components/ContentArea';
import Barcode from 'components/Barcode';
import FastImage from 'react-native-fast-image';
import globalStyles from 'styles/globalStyles';
import styles from 'styles/offerDetailScreenStyle';
import Theme from 'theme/core';

class OfferDetailScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: () => (
        <Header
          title="Offer Detail"
          goBack={() => navigation.navigate('Offer')}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.getParams = this.getParams.bind(this);
  }

  getParams(key) {
    return this.props.navigation.getParam(key);
  }

  render() {
    return (
      <ContentArea noPadding>
        <SafeAreaView style={globalStyles.container}>
          <ScrollView style={globalStyles.container}>
            <FastImage
              style={styles.itemCardImage}
              source={{
                uri: this.getParams('image'),
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
            <View style={styles.contentContainerStyle}>
              <Text.Headline style={globalStyles.textWhite}>
                {this.getParams('title')}
              </Text.Headline>
              <Text.SubHeadline style={globalStyles.textWhite}>
                {this.getParams('locations')}
              </Text.SubHeadline>
              <Text style={globalStyles.textWhite}>
                {this.getParams('start_date')}
              </Text>
              <Text style={globalStyles.textWhite}>Normal Text</Text>
              <Text.Headline style={globalStyles.textWhite}>
                Headline Text
              </Text.Headline>
              <Text style={globalStyles.textWhite}>Normal Text</Text>
            </View>
            <View
              style={[
                {padding: Theme.paddingBase},
                globalStyles.flexRowCenter,
              ]}>
              <Text style={globalStyles.textWhite}>
                Scan the barcode to redeem
              </Text>
            </View>
            <Barcode />
          </ScrollView>
        </SafeAreaView>
      </ContentArea>
    );
  }
}

export default OfferDetailScreen;
