import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import ProductItem from '../../components/products/productItem';

const Favorites: React.FC = () => {
  const {favorites} = useSelector((state: RootState) => state.favorites);
  console.log(favorites);
  return (
    <SafeAreaView style={defaultScreenStyles.safeAreaContainer}>
      <View style={defaultScreenStyles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={favorites}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
//make this component available to the app
export default Favorites;
