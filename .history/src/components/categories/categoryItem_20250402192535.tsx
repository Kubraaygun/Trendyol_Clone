//import liraries
import React, {Component} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {categoryItemProps} from '../../models/ui/catogeroyItemProps';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants';
import {RootState} from '../../store';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../../store/slice/categoriesSlice';
// create a component
const CategoryItem: React.FC<categoryItemProps> = ({category}) => {
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categories,
  );
  const dispatch = useDispatch();
  console.log(selectedCategory);

  return (
    <Pressable
      onPress={() => dispatch(setCategory(category))}
      style={[styles.container, styles.selectedContainer]}>
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
    minHeight: height * 0.045,
  },
  selectedContainer: {
    backgroundColor: Colors.PRIMARY,
  },
});

//make this component available to the app
export default CategoryItem;
