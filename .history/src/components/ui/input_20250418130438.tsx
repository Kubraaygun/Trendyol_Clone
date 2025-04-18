//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';

type Props = RouteType<'Input'>
// create a component
const Input: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => onChangeText(text)}
      />
    </Sare>
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
