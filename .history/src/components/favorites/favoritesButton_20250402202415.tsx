//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
// create a component
const FavoritesButton: React.FC<Props> = ({navigation, route}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name={'heart-outline'} size={size} color={color} />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});

//make this component available to the app
export default FavoritesButton;
