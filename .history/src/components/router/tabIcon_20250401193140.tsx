import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import {TabIconProps} from '../../models/ui/tabIconProps';
import {TABNAVIGATOR} from '../../utils/routes';

const TabIcon: React.FC<TabIconProps> = ({route, size, color, focused}) => {
  switch (route.name) {
    case TABNAVIGATOR.HOME:
      return (
        <Icon
          name={focused ? 'home' : 'home-outline'}
          size={size}
          color={color}
        />
      );
    case TABNAVIGATOR.SEARCH:
      return (
        <Icon
          name={focused ? 'search' : 'search-outline'}
          size={size}
          color={color}
        />
      );
    case TABNAVIGATOR.FAVORITES:
      return (
        <Icon
          name={focused ? 'heart' : 'heart-outline'}
          size={size}
          color={color}
        />
      );
    case TABNAVIGATOR.CART:
      return (
        <Icon
          name={focused ? 'cart' : 'cart-outline'}
          size={size}
          color={color}
        />
      );
    case TABNAVIGATOR.PROFILE:
      return <Icon name="person-outline" size={size} color={color} />;
  }
};

//make this component available to the app
export default TabIcon;
