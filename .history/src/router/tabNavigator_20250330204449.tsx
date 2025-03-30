//import liraries
import React, {Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
// create a component
const TabNavigator: React.FC<Props> = ({navigation, route})=> {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
  );
});

//make this component available to the app
export default TabNavigator;
