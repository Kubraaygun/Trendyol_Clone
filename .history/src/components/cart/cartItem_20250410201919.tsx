//import liraries
import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {CartItemProps} from '../../models/ui/cartItemProps';
import {height, width} from '../../utils/constants';
import {Colors} from '../../theme/colors';

// create a component
const CartItem: React.FC<CartItemProps> = ({product}) => {
  return (
    <Pressable style={styles.container}>
      <View>
        <Image source={{uri: product.image}} style={styles.image} />
      </View>

      <View style={{flex: 1, paddingHorizontal: 10}}>
        <View>
          <Text style={{fontSize: 18}}>{product?.title} 2</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{fontSize: 30}}></Text>
          </View>
          <View>
            <Text style={styles.price}>{product?.price} </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 5,
    borderBottomWidth: 0.5,
    borderColor: Colors.GRAY,
    paddingVertical: 10,
  },
  image: {
    width: width * 0.2,
    height: height * 0.1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: Colors.PRIMARY,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: Colors.PRIMARY,
  },
});

//make this component available to the app
export default CartItem;
