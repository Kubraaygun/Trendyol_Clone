//import liraries
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, Text} from 'react-native';
const Stack = createNativeStackNavigator();
// create a component
const Home: React.FC<Props> = ({navigation, route}) => {
  const deneme = useSelector(state => state.products.deneme);
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Home;
