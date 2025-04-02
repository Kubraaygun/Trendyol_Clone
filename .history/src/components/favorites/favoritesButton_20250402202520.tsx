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
      <Icon name={'heart-outline'} size={20} color={Colors.BLACK} />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width * 0.05,
    height: height * 0.05,
  },
});

//make this component available to the app
export default FavoritesButton;
