//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WidgetHeader from '../components/widgets/widgetHeader';
import {useSelector} from 'react-redux';
import {RootState} from '../store/index';
import ProductItem from '../components/products/productItem';
const PopularProducts: React.FC = () => {
  const popularProducts = useSelector(
    (state: RootState) => state.products.popularProducts,
  );
  return (
    <View style={styles.container}>
      <WidgetHeader title="Populer Urunler" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={popularProducts}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default PopularProducts;
