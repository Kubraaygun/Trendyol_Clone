import React, {Component} from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import CartItem from '../../components/cart/cartItem';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import {height} from '../../utils/constants';
import {Colors} from '../../theme/colors';

const Cart: React.FC = () => {
  const {cart} = useSelector((state: RootState) => state.cart);
  console.log('sepetteki urunler', cart);
  return (
    <SafeAreaView style={defaultScreenStyles.safeAreaContainer}>
      <View style={defaultScreenStyles.container}>
        <FlatList
          data={cart}
          renderItem={({item}) => <CartItem product={item} />}
        />
        <View style={styles.priceContainer}>
          <View style={{flex: 1, justifyContent: 'center', paddingLeft: 15}}>
            <Text style={styles.price}>0 TL</Text>
            <Text style={styles.info}>Kargo Bedava</Text>
          </View>
          <View style={{flex: 2, justifyContent: 'center'}}>
            <Button
              title="Sepeti Onayla"
              onPress={() => dispatch(addCart(product))}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  priceContainer: {
    height: height * 0.09,
    borderTopWidth: 0.5,
    borderColor: Colors.GRAY,
    flexDirection: 'row',
  },
  price: {
    fontSize: 18,
    color: Colors.PRIMARY,
    fontWeight: '600',
  },

  info: {
    fontSize: 14,
    color: Colors.GREEN,
    fontWeight: '600',
  },
});
//make this component available to the app
export default Cart;
