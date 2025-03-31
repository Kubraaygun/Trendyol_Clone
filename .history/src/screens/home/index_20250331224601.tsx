//import liraries
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import type {RootState} from '../../store/index';
import {getAllCategories} from '../../store/actions/categoriesAction';

const Stack = createNativeStackNavigator();
// create a component
const Home: React.FC<Props> = ({navigation, route}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories({page: 1}));
  }, []);
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Home;
