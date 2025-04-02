//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WidgetHeader from '../components/widgets/widgetHeader';
const PopularProducts: React.FC = () => {
  return (
    <View style={styles.container}>
      <WidgetHeader title="Populer Urunler" />
      <Text>PopularProducts</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default PopularProducts;
