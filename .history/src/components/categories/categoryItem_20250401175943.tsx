//import liraries
import React, {Component} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {categoryItemProps} from '../../models/ui/catogeroyItemProps';

// create a component
const CategoryItem: React.FC<categoryItemProps> = ({category}) => {
  return (
    <Pressable style={styles.container}>
      <Text style={{fontSize: 16}}> {category} </Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 100,
  },
});

//make this component available to the app
export default CategoryItem;
