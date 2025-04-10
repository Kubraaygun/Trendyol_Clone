import React, {Component} from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import CartItem from '../../components/cart/cartItem';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';

const Cart: React.FC = () => {
  const {cart} = useSelector((state: RootState) => state.cart);
  console.log('sepetteki urunler', cart);
  return (
    <SafeAreaView style={defaultScreenStyles.container}>
      <View>
        <FlatList
          data={cart}
          renderItem={({item}) => <CartItem product={item} />}
        />
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
