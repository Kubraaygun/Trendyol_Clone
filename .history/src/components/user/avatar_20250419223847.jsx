//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AvatarProps} from '../../models/ui/avatarProps';

// create a component
const Avatar: React.FC<AvatarProps> = () => {
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
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
export default Avatar;
