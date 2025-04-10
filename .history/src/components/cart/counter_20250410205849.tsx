//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CounterProps} from '../../models/ui/counterProps';

// create a component
const Counter: React.FC<CounterProps> = ({quantity}) => {
  return (
    <View style={styles.container}>
      <Text>{quantity}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Counter;
