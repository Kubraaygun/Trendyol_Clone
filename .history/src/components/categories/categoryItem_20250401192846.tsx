//import liraries
import React, {Component} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {categoryItemProps} from '../../models/ui/catogeroyItemProps';
import {Colors} from '../../theme/colors';

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
    margin: 5,
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 100,
    marginVertical: 10,
    borderColor: Colors.GRAY,
  },
});

//make this component available to the app
export default CategoryItem;
