//import liraries
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import type {RootState} from '../../store/index';

const Stack = createNativeStackNavigator();
// create a component
const Home: React.FC<Props> = ({navigation, route}) => {
  const deneme = useSelector((state: RootState) => state.products.deneme);
  return (
    <SafeAreaView>
      <Text>{deneme}</Text>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Home;
