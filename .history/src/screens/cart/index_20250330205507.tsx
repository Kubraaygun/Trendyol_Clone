import React, {Component} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Cart: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Text>Cart</Text>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Cart;
