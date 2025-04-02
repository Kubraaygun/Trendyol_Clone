//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WidgetHeader from '../components/widgets/widgetHeader';
import {useSelector} from 'react-redux';
import {RootState} from '../store/index';
const PopularProducts: React.FC = () => {
  const popularProducts = useSelector(
    (state: RootState) => state.products.popularProducts,
  );
  return (
    <View style={styles.container}>
      <WidgetHeader title="Populer Urunler" />
      <Text style={{fontSize: 30}}>PopularProducts</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default PopularProducts;
