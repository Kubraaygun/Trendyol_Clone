//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';

const Notifications: React.FC = () => {
  return (
    <View style={defaultScreenStyles.safeAreaContainer}>
      <Text>MyComponent</Text>
    </View>
  );
};

//make this component available to the app
export default Notifications;
