//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';

// create a component
const Login: React.FC = () => {
  return (
    <View style={defaultScreenStyles.safeAreaContainer}>
      <ScrollView>
        <Input />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Login;
