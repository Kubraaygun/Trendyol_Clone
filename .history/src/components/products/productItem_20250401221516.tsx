//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {width, height} from '../../utils/constants';
// create a component
const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={{uri: product.image}}
        style={{width: width * 0.3, height: height * 0.2}}
      />
      <Text>{product.title}</Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: width * 0.3,
  },
});

//make this component available to the app
export default ProductItem;
