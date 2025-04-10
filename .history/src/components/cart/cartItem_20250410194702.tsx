//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CartItemProps} from '../../models/ui/cartItemProps';

// create a component
const CartItem: React.FC<CartItemProps> = ({product}) => {
  return (
    <View style={styles.container}>
      <Text>{product?.title} 2</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default CartItem;
