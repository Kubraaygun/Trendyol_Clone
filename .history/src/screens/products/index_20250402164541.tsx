//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';
import {RootState} from '../../store';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/products/productItem';

// create a component
const ProductList: React.FC<Props> = ({navigation, routes}) => {
  const {products} = useSelector((state: RootState) => state.products);
  return (
    <View style={defaultScreenStyles.safeAreaContainer}>
      <FlatList data={products} renderItem={({item}) => <ProductItem />} />
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
