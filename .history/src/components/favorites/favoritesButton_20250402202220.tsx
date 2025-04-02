//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const FavoritesButton: React.FC<Props> = ({navigation, route}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>FavoritesButton</Text>
    </TouchableOpacity>
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
export default FavoritesButton;
