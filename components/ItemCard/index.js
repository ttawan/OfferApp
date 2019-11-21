import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity} from 'react-native';
import styles from 'styles/itemCardStyle';
import FastImage from 'react-native-fast-image';

const ItemCard = ({uri, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <FastImage
          style={styles.cardImage}
          source={{
            uri: uri,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>
    </View>
  );
};

ItemCard.propTypes = {
  uri: PropTypes.string,
  onPress: PropTypes.func,
};

ItemCard.defaultProps = {
  uri: null,
  onPress: null,
};

export default ItemCard;
