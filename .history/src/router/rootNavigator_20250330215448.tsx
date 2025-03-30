//import liraries
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {TABNAVIGATOR} from '../utils/routes';
const Stack = createNativeStackNavigator();
// create a component
const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={TABNAVIGATOR.TABNAVIGATOR} component={TabNavigator} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default RootNavigator;
