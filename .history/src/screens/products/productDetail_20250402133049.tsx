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
import {Colors} from '../../theme/colors';

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
    <View style={defaultScreenStyles.container}>
      <View>
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
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </ScrollView>
      </View>

      <View>
        <Text style={styles.title}>{product.title}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
  },
  category: {
    fontSize: 18,
    color: Colors.PRIMARY,
    marginVertical: 10,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

//make this component available to the app
export default ProductDetail;
