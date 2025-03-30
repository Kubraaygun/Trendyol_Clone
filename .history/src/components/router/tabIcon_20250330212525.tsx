import React from 'react';

import Icon from '@react-native-vector-icons/ionicons';
import {TabIconProps} from '../../models/ui/tabIconProps';

const TabIcon: React.FC<TabIconProps> = ({route, size, color, focused}) => {
  return <Icon name="home-outline" size={30} color="#900" />;
};

//make this component available to the app
export default TabIcon;
