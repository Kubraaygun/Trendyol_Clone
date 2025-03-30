import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, Text} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
const Stack = createNativeStackNavigator();
// create a component
const TabIcon: React.FC<Props> = ({navigation, route}) => {
  return <Icon name="home-outline" size={30} color={'red'} />;
};

//make this component available to the app
export default TabIcon;
