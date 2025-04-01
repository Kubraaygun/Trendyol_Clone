//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const BestSeller: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>BestSeller</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default BestSeller;
