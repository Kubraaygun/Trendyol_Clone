//import liraries
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import type {RootState} from '../../store/index';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URLS} from '../../service/urls';

const Stack = createNativeStackNavigator();
// create a component
const Home: React.FC<Props> = ({navigation, route}) => {
  const deneme = useSelector((state: RootState) => state.products.deneme);
  useEffect(() => {
    getRequest({}, PRODUCTS_URLS.ALL_PRODUCTS)
      .then(data => {
        console.log(data.data);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <SafeAreaView>
      <Text>{deneme}</Text>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Home;
