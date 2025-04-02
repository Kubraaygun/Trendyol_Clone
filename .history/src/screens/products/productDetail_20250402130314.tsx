//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {RouteType} from '../routes/RouteType';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../../store/actions/productsActions';
import { RootState } from '../../store';

type Props = RouteType<'ProductDetail'>;
// create a component
const ProductDetail: React.FC<Props> = ({route}) => {
  const {productId} = route.params;
  const {product} useSelector((state:RootState)=>state.products.product)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetail({id: productId}));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={{fontSize: 30}}>{productId}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ProductDetail;
