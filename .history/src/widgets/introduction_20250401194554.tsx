//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Introduction: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>Introduction</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Introduction;
