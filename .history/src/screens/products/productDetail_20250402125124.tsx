//import liraries
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {RouteType} from '../routes/RouteType';

type Props = RouteType<'ProductDetail'>;
// create a component
const ProductDetail: React.FC<Props> = ({route}) => {
  const {productId} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={{fontSize: 30}}>{productId}</Text>
      </ScrollView>
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
export default ProductDetail;
