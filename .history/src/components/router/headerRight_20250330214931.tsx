import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';

const HeaderRight: React.FC<Props> = ({navigation, route}) => {
  return (
    <View>
      <Pressable>
        <Icon name="person-outline" />
      </Pressable>
    </View>
  );
};
export default HeaderRight;
