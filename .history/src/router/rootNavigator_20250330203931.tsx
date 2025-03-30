//import liraries
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
const Stack = createNativeStackNavigator();
// create a component
const RootNavigator: React.FC<Props> = ({navigation, route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default RootNavigator;
