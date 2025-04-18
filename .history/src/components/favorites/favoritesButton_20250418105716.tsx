//import liraries
import React, {Component} from 'react';
import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';
import {width} from '../../utils/constants';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {RootState} from '../../store';
import {useSelector} from 'react-redux';
// create a component
const FavoritesButton: React.FC<ProductItemProps> = ({product}) => {
  const {isLogin} = useSelector((state: RootState) => state.auth);

  const checkLogin = () => {
    if (!isLogin) {
      Alert.alert(
        'Giriş Yap',
        'Lütfen favorilere eklemeden önce giriş yapınız',
        [
          {
            text: 'İptal',
            onPress: () => console.log('Cancel'),
            style: 'cancel',
          },
          {text: 'Giriş Yap', onPress: () => console.log('OK')},
        ],
      );
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={checkLogin}>
      <Icon
        name={product.isFavorite ? 'heart' : 'heart-outline'}
        size={20}
        color={Colors.PRIMARY}
      />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width * 0.072,
    height: width * 0.072,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    right: 5,
    top: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Colors.WHITE,
  },
});

//make this component available to the app
export default FavoritesButton;
