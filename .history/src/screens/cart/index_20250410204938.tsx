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
  const {cart, totalPrice} = useSelector((state: RootState) => state.cart);

  return (
    <SafeAreaView style={defaultScreenStyles.safeAreaContainer}>
      <View style={defaultScreenStyles.container}>
        <FlatList
          ListEmptyComponent={
            <Text style={{fontSize: 18}}>Henuz Sepete Urun Eklemediniz</Text>
          }
          data={cart}
          renderItem={({item}) => <CartItem product={item} />}
        />
        <View style={styles.priceContainer}>
          <View style={{flex: 1, justifyContent: 'center', paddingLeft: 15}}>
            <Text style={styles.total}>Toplam</Text>
            <Text style={styles.price}>{totalPrice} TL</Text>
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
  total: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '300',
  },
  priceContainer: {
    height: height * 0.08,
    borderTopWidth: 0.5,
    borderColor: Colors.GRAY,
    flexDirection: 'row',
  },
  price: {
    fontSize: 16,
    color: Colors.BLACK,
    fontWeight: 'bold',
  },

  info: {
    fontSize: 10,
    color: Colors.GREEN,
    fontWeight: '600',
  },
});
//make this component available to the app
export default Cart;
