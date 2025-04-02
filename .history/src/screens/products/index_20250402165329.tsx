//import liraries
import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';
import {RootState} from '../../store';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/products/productItem';
import {RouteType} from '../routes/RouteType';

type Props = RouteType<'ProductList'>;

// create a component
const ProductList: React.FC<Props> = ({navigation, routes}) => {
  const {products} = useSelector((state: RootState) => state.products);
  return (
    <SafeAreaView style={defaultScreenStyles.safeAreaContainer}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default ProductList;
