import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';

const HeaderRight: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Icon name="notifications-outline" size={30} color={Colors.BLACK} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  button: {
    marginRight: 5,
  },
});
export default HeaderRight;
