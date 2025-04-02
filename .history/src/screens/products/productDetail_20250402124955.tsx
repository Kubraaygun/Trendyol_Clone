//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const ProductDetail: React.FC<Props> = ({route}) => {
  const {productId} = route.params;
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>{productId}</Text>
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
export default ProductDetail;
