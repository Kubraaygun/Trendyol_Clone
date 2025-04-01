//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

// create a component
const CategoryItem: React.FC<Props> = ({category}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30}}>CategoryItem</Text>
    </SafeAreaView>
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
export default CategoryItem;
