//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {width, height} from '../../utils/constants';
import {Colors} from '../../theme/colors';
// create a component
const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={{uri: product.image}}
        style={{
          width: width * 0.25,
          height: height * 0.15,
          resizeMode: 'contain',
          alignItems: 'center',
        }}
      />
      <Text numberOfLines={2} style={{fontSize: 14, fontWeight: 'bold'}}>
        {product.title}
      </Text>
      <Text numberOfLines={2} style={{fontSize: 14, color: Colors.PRIMARY}}>
        {product.price}
      </Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    minHeight: height * 0.28,
    borderWidth: 0.5,
    borderColor: Colors.GRAY,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 5,
  },
});

//make this component available to the app
export default ProductItem;
