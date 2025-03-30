//import liraries
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import Favorites from '../screens/favorites';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import {TABNAVIGATOR} from '../utils/routes';

const Tab = createBottomTabNavigator();
// create a component
const TabNavigator: React.FC<Props> = ({navigation, route}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f06a00',
        tabBarInactiveTintColor: '#bdbdbd',
      }}>
      <Tab.Screen name={TABNAVIGATOR.HOME} component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

//make this component available to the app
export default TabNavigator;
