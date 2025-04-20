//import liraries
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {
  AUTHNAVIGATOR,
  NOTIFICATIONAVIGATOR,
  PRODUCTSNAVIGATOR,
  TABNAVIGATOR,
} from '../utils/routes';
import ProductList from '../screens/products';
import ProductDetail from '../screens/products/productDetail';
import {Colors} from '../theme/colors';
import Login from '../screens/auth/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {checkUser} from '../store/slice/authSlice';
import {AppDispatch} from '../store';
import Notifications from '../screens/notification';
const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getState = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch(checkUser(token));
    }
  };

  useEffect(() => {
    getState();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: Colors.BLACK,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABNAVIGATOR.TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen
        name={PRODUCTSNAVIGATOR.PRODUCTSLIST}
        component={ProductList}
      />
      <Stack.Screen
        name={PRODUCTSNAVIGATOR.PRODUCTDETAIL}
        component={ProductDetail}
      />
      <Stack.Screen name={AUTHNAVIGATOR.LOGIN} component={Login} />
      <Stack.Screen
        name={NOTIFICATIONAVIGATOR.NOTIFICATIONS}
        component={Notifications}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
