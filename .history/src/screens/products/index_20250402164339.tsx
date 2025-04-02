//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';

// create a component
const ProductList: React.FC<Props> = ({navigation, routes}) => {
  return (
    <View style={defaultScreenStyles.safeAreaContainer}>
      <Text style={{fontSize: 30}}>ProductList</Text>
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
export default ProductList;
