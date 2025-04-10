import React, {Component} from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';

const Cart: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Cart</Text>
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
