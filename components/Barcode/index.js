import React from 'react';
import {View} from 'react-native';
import styles from 'styles/barcodeStyle';
import FastImage from 'react-native-fast-image';

const Barcode = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, styles.barCode]}>
        <FastImage
          style={styles.barCodeImage}
          source={{
            uri:
              'https://www.databar-barcode.info/wp-content/uploads/2015/02/barcode-13.png',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </View>
    </View>
  );
};

export default Barcode;
