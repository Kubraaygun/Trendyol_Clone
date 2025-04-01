//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WidgetHeader from '../components/widgets/widgetHeader';

// create a component
const PopularProducts: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <WidgetHeader title="Cok Satan Urunler" />
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
