import React, {Component} from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import CartItem from '../../components/cart/cartItem';

const Cart: React.FC = () => {
  const {cart} = useSelector((state: RootState) => state.cart);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={} 
      renderItem={({item}) => <CartItem/>)
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
//make this component available to the app
export default Cart;
