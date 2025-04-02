//import liraries
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {PRODUCTSNAVIGATOR, TABNAVIGATOR} from '../utils/routes';
import ProductList from '../screens/products';
const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={TABNAVIGATOR.TABNAVIGATOR} component={TabNavigator} />
      <Stack.Screen
        name={PRODUCTSNAVIGATOR.PRODUCTSLIST}
        component={ProductList}
      />
      <Stack.Screen
        name={PRODUCTSNAVIGATOR.PRODUCTSLIST}
        component={ProductList}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
