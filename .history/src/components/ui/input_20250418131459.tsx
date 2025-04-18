//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import {InputProps} from '../../models/ui/inputProps';

// create a component
const Input: React.FC<InputProps> = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30}}>E posta</Text>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Input;
