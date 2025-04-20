import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {NOTIFICATIONAVIGATOR} from '../../utils/routes';

const HeaderRight: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate(NOTIFICATIONAVIGATOR.NOTIFICATIONS)}
        style={styles.button}>
        <Icon name="notifications-outline" size={30} color={Colors.BLACK} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginRight: 5,
  },
});
export default HeaderRight;
