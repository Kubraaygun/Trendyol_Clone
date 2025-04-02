//import liraries
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {PRODUCTSNAVIGATOR, TABNAVIGATOR} from '../utils/routes';
import ProductList from '../screens/products';
import ProductDetail from '../screens/products/productDetail';
const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      options={{headerShown={false}}}
      name={TABNAVIGATOR.TABNAVIGATOR} component={TabNavigator} />
      <Stack.Screen
        name={PRODUCTSNAVIGATOR.PRODUCTSLIST}
        component={ProductList}
      />
      <Stack.Screen
        name={PRODUCTSNAVIGATOR.PRODUCTDETAIL}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
