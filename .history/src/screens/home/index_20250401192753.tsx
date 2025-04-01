//import liraries
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Categories from '../../widgets/categories';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';

const Stack = createNativeStackNavigator();
// create a component
const Home: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView style={defaultScreenStyles.container}>
      <View>
        <Categories />
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Home;
