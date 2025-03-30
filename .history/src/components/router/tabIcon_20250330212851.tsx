import React from 'react';

import Icon from '@react-native-vector-icons/feather';
import {TabIconProps} from '../../models/ui/tabIconProps';
import {TABNAVIGATOR} from '../../utils/routes';

const TabIcon: React.FC<TabIconProps> = ({route, size, color, focused}) => {
  switch (route.name) {
    case TABNAVIGATOR.HOME:
      return <Icon name="home" size={size} />;
      break;

    default:
      break;
  }
};

//make this component available to the app
export default TabIcon;
