//import liraries
import React, {useEffect} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';
import {RootState} from '../../store';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../../components/products/productItem';
import {RouteType} from '../routes/RouteType';
import {getAllProducts} from '../../store/actions/productsActions';
import Categories from '../../widgets/categories';
import {Colors} from '../../theme/colors';

type Props = RouteType<'ProductList'>;

const ProductList: React.FC<Props> = ({navigation, routes}) => {
  const {products} = useSelector((state: RootState) => state.products);
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categories,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts({category: selectedCategory}));
  }, [selectedCategory]);
  return (
    <View style={defaultScreenStyles.container}>
      <Categories />
      <ActivityIndicator size={'large'} color={Colors.PRIMARY} />
      <FlatList
        showsVerticalScrollIndicator={false}
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
