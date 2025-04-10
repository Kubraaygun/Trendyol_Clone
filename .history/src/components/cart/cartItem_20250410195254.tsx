//import liraries
import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {CartItemProps} from '../../models/ui/cartItemProps';
import {height, width} from '../../utils/constants';

// create a component
const CartItem: React.FC<CartItemProps> = ({product}) => {
  return (
    <Pressable style={styles.container}>
      <View>
        <Image
          source={{uri: product.image}}
          style={{
            width: width * 0.25,
            height: height * 0.15,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
      </View>

      <View>
        <View>
          <Text style={{fontSize: 18}}>{product?.title} 2</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{fontSize: 30}}>1</Text>
          </View>
          <View>
            <Text style={{fontSize: 30}}>{product?.price} 2</Text>
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
  },
});

//make this component available to the app
export default CartItem;
