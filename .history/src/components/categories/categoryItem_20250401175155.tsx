//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const CategoryItem: React.FC<Props> = ({navigation, route}) => {
  return (
    <View>
      <Text>MyComponent</Text>
    </View>
  );
};

//make this component available to the app
export default CategoryItem;
