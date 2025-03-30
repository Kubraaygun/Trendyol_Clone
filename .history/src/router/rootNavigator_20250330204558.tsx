//import liraries
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import TabNavigator from './tabNavigator';
const Stack = createNativeStackNavigator();
// create a component
const RootNavigator: React.FC<Props> = ({navigation, route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default RootNavigator;
