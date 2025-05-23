//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';
import {width} from '../../utils/constants';
// create a component
const FavoritesButton: React.FC<Props> = ({navigation, route}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name={'heart-outline'} size={24} color={Colors.BLACK} />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    padding: 5,
    width: width * 0.07,
    height: width * 0.07,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

//make this component available to the app
export default FavoritesButton;
