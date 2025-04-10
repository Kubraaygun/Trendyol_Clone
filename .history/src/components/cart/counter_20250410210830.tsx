//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CounterProps} from '../../models/ui/counterProps';
import {Colors} from '../../theme/colors';
import Icon from '@react-native-vector-icons/feather';
// create a component
const Counter: React.FC<CounterProps> = ({quantity}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="minus" size={20} />
      </TouchableOpacity>
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
    borderColor: Colors.GRAY,
    borderRadius: 100,
    flexDirection: 'row',
  },
  quantity: {
    color: Colors.PRIMARY,
    fontSize: 14,
    fontWeight: '500',
  },
  quantityContainer: {
    backgroundColor: Colors.SOFTORANGE,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

//make this component available to the app
export default Counter;
