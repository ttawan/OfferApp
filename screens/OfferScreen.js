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

  renderItem() {
    const {navigation} = this.props;
    return (
      <ItemCard
        onPress={() => navigation.navigate('OfferDetailPage')}
        uri="https://test.sportingglobe.com.au/wp-content/uploads/2019/07/App-Hero-NBA.jpg"
      />
    );
  }

  render() {
    return (
      <ContentArea>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => <View style={styles.itemDivider} />}
        />
      </ContentArea>
    );
  }
}

export default OfferScreen;
