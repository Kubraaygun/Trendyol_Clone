//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CounterProps} from '../../models/ui/counterProps';
import {Colors} from '../../theme/colors';

// create a component
const Counter: React.FC<CounterProps> = ({quantity}) => {
  return (
    <View style={styles.container}>
      <Tex style={styles.quantity}>{quantity}</Tex>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    color: Colors.PRIMARY,
  },
});

//make this component available to the app
export default Counter;
