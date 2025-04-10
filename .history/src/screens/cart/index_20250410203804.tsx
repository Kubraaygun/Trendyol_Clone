import React, {Component} from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import CartItem from '../../components/cart/cartItem';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';

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
            <Text style={styles.price}>{product?.price} TL</Text>
            <Text style={styles.info}>Kargo Bedava</Text>
          </View>
          <View style={{flex: 2, justifyContent: 'center'}}>
            <Button onPress={() => dispatch(addCart(product))} />
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
});
//make this component available to the app
export default Cart;
