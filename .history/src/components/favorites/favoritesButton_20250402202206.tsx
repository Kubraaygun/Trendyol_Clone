//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const FavoritesButton: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>FavoritesButton</Text>
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
export default FavoritesButton;
