//import liraries
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import Favorites from '../screens/favorites';

const Tab = createBottomTabNavigator();
// create a component
const TabNavigator: React.FC<Props> = ({navigation, route}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home" component={Search} />
      <Tab.Screen name="Home" component={Favorites} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

//make this component available to the app
export default TabNavigator;
