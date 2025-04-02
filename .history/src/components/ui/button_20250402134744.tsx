//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';

// create a component
const Button: React.FC<Props> = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
  },
});

//make this component available to the app
export default Button;
