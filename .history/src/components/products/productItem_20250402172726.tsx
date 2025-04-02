//import liraries
import React from 'react';
import {Text, StyleSheet, Image, Pressable} from 'react-native';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {width, height} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSNAVIGATOR} from '../../utils/routes';
// create a component
const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(PRODUCTSNAVIGATOR.PRODUCTDETAIL, {
          productId: product.id,
        })
      }
      style={styles.container}>
      <Image
        source={{uri: product.image}}
        style={{
          width: width * 0.25,
          height: height * 0.15,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <Text
        numberOfLines={2}
        style={{fontSize: 14, fontWeight: 'bold', marginVertical: 5}}>
        {product.title}
      </Text>
      <Text
        numberOfLines={2}
        style={{fontSize: 14, color: Colors.GRAY, marginVertical: 5}}>
        {product.category}
      </Text>
      <Text
        numberOfLines={2}
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginVertical: 5,
          color: Colors.PRIMARY,
        }}>
        {product.price} TL
      </Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: width * 0.5,
    minHeight: height * 0.28,
    borderWidth: 0.5,
    borderColor: Colors.GRAY,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 5,
  },
});

//make this component available to the app
export default ProductItem;
