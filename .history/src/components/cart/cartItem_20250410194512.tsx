//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteType} from '../../routes/RouteType';
import {CartItemProps} from '../../models/ui/cartItem';
type Props = RouteType<'CartItem'>;

// create a component
const CartItem: React.FC<CartItemProps> = ({product}) => {
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
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
