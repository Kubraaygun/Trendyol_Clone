import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';

const HeaderRight: React.FC<Props> = ({navigation, route}) => {
  return (
    <View>
      <Pressable>
        <Icon name="person-outline" size={30} color={Colors.BLACK} />
      </Pressable>
      <Pressable>
        <Icon name="person-outline" size={30} color={Colors.BLACK} />
      </Pressable>
    </View>
  );
};
export default HeaderRight;
