import React from 'react';

import Icon from '@react-native-vector-icons/feather';
import {TabIconProps} from '../../models/ui/tabIconProps';

const TabIcon: React.FC<TabIconProps> = ({route, size, color, focused}) => {
  return <Icon name="home" size={30} color="#900" />;
};

//make this component available to the app
export default TabIcon;
