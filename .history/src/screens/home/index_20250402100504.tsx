//import liraries
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Categories from '../../widgets/categories';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';
import Introduction from '../../widgets/introduction';
import BestSeller from '../../widgets/bestSeller';
import PopularProducts from '../../widgets/popularProducts';

const Stack = createNativeStackNavigator();
// create a component
const Home: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView style={defaultScreenStyles.safeAreaContainer}>
      <View style={defaultScreenStyles.container}>
        <Categories />
        <Introduction />
        <BestSeller />
        <PopularProducts />
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Home;
