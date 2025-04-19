//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AvatarProps} from '../../models/ui/avatarProps';
import {Colors} from '../../theme/colors';
import {getInitials} from '../../utils/function';

// create a component
const Avatar: React.FC<AvatarProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>{getInitials(name, surname)}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

//make this component available to the app
export default Avatar;
