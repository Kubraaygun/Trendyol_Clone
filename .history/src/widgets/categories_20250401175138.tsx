//import liraries
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FlatList, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCategories} from '../store/actions/categoriesAction';
import {RootState} from '../store/index';
import CategoryItem from '../components/categories/categoryItem';

const Stack = createNativeStackNavigator();
// create a component
const Categories: React.FC<Props> = ({navigation, route}) => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories({}));
  }, []);

  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={({item}) => <CategoryItem />}
    />
  );
};

export default Categories;
