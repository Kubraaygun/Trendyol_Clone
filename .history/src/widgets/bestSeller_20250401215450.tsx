//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WidgetHeader from '../components/widgets/widgetHeader';
import {useDispatch, useSelector} from 'react-redux';
import {getBestSellerProducts} from '../store/actions/productsActions';
import {RootState} from '../store/index';

// create a component
const BestSeller: React.FC = () => {
  const bestSellerProducts = useSelector(
    (state: RootState) => state.products.bestSellerProducts,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBestSellerProducts());
  }, []);
  return (
    <View style={styles.container}>
      <WidgetHeader title="Cok Satan Urunler" />
      <Text>BestSeller</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default BestSeller;
