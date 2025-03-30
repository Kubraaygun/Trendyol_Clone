import React from 'react';

import Icon from '@react-native-vector-icons/ionicons';
import {TabIconProps} from '../../models/ui/tabIconProps';
import {TABNAVIGATOR} from '../../utils/routes';

const TabIcon: React.FC<TabIconProps> = ({route, size, color, focused}) => {
  switch (route.name) {
    case TABNAVIGATOR.HOME:
      return <Icon name="home-outline" size={size} color={color} />;
      TABNAVIGATOR.SEARCH:
      return <Icon name="home-outline" size={size} color={color} />;
      TABNAVIGATOR.FAVORITES:
      return <Icon name="home-outline" size={size} color={color} />;
      TABNAVIGATOR.CART:
      return <Icon name="home-outline" size={size} color={color} />;
      TABNAVIGATOR.PROFILE:
      return <Icon name="home-outline" size={size} color={color} />;
  }
};

//make this component available to the app
export default TabIcon;
