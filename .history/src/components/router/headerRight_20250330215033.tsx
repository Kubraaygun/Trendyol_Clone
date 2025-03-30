import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 1,
  },
});
export default HeaderRight;
