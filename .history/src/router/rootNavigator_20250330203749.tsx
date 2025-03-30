//import liraries
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
// create a component
const rootNavigator: React.FC<Props> = ({navigation, route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default rootNavigator;
