//import liraries
import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
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
    <View style={defaultScreenStyles.container}>
      <FlatList
        contentContainerStyle={{alignItems: 'center'}}
        numColumns={2}
        data={products}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default ProductList;
