//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import {InputProps} from '../../models/ui/inputProps';
import {Colors} from '../../theme/colors';

// create a component
const Input: React.FC<InputProps> = ({title}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 18}}>{title}</Text>
      <TextInput style={styles.input} />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderColor: Colors.GRAY,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});

//make this component available to the app
export default Input;
