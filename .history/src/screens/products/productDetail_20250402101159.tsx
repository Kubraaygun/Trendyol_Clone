//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const ProductDetail: React.FC<Props> = ({navigation, routes}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>ProductDetail</Text>
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
export default ProductDetail;
