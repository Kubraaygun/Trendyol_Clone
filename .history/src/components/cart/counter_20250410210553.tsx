//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CounterProps} from '../../models/ui/counterProps';
import {Colors} from '../../theme/colors';

// create a component
const Counter: React.FC<CounterProps> = ({quantity}) => {
  return (
    <View style={styles.container}>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
  },
  quantity: {
    color: Colors.PRIMARY,
    fontSize: 16,
    fontWeight: '500',
  },
  quantityContainer: {
    backgroundColor: Colors.SOFTORANGE,
    width: 23,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

//make this component available to the app
export default Counter;
