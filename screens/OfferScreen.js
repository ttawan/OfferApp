import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import Header from 'components/Header';
import ContentArea from 'components/ContentArea';
import ItemCard from 'components/ItemCard';
import styles from 'styles/offerScreenStyles';
class OfferScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="My Offers" />,
  };

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({item}) {
    const {navigation} = this.props;
    const {image, id} = item;
    return (
      <ItemCard
        id={id}
        onPress={() => navigation.navigate('OfferDetailPage', item)}
        uri={image}
      />
    );
  }

  render() {
    const {allOffers} = this.props;

    return (
      <ContentArea>
        <FlatList
          data={allOffers}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => <View style={styles.itemDivider} />}
        />
      </ContentArea>
    );
  }
}

export default OfferScreen;
