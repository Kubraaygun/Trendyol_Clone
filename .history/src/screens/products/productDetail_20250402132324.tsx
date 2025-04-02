//import liraries
import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  View,
} from 'react-native';
import {RouteType} from '../routes/RouteType';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../../store/actions/productsActions';
import {RootState} from '../../store';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';
import {height, width} from '../../utils/constants';

type Props = RouteType<'ProductDetail'>;
// create a component
const ProductDetail: React.FC<Props> = ({route}) => {
  const {productId} = route.params;
  const {product} = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetail({id: productId}));
  }, []);
  return (
    <SafeAreaView style={defaultScreenStyles.safeAreaContainer}>
      <View style={defaultScreenStyles.container}>
        <ScrollView>
          <Image
            source={{uri: product.image}}
            style={{
              width: width,
              height: height * 0.3,
              resizeMode: 'contain',
              marginVertical: 20,
            }}
          />
          <Text style={{fontSize: 30}}>{product.title}</Text>
        </ScrollView>
      </View>
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
