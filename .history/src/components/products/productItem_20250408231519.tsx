//import liraries
import React from 'react';
import {Text, StyleSheet, Image, Pressable} from 'react-native';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {width, height} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSNAVIGATOR} from '../../utils/routes';
import FavoritesButton from '../favorites/favoritesButton';
import Rate from './rate';
import FreeCargo from '../badge/freeCargo';
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
      <FavoritesButton product={product} />
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
        style={{fontSize: 14, color: Colors.GREEN, marginVertical: 5}}>
        {product.category}
      </Text>
      {product.rating && <Rate size="small" rating={product?.rating} />}
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
      <FreeCargo />
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: width * 0.46,
    minHeight: height * 0.28,
    borderWidth: 0.5,
    borderColor: Colors.GRAY,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 5,
    margin: 5,
  },
});

//make this component available to the app
export default ProductItem;
