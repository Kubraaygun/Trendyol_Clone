//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Product} from '../../models/data/productsState';
import {ProductItemProps} from '../../models/ui/productItemProps';

// create a component
const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  return (
    <View style={styles.container}>
      <Text>{product}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ProductItem;
