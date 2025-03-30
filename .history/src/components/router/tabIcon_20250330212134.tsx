import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from '@react-native-vector-icons/ionicons';
import {TabIconProps} from '../../models/ui/tabIconProps';
const Stack = createNativeStackNavigator();
// create a component

const TabIcon: React.FC<TabIconProps> = ({navigation, route}) => {
  return <Icon name="home-outline" size={30} color={'red'} />;
};

//make this component available to the app
export default TabIcon;
