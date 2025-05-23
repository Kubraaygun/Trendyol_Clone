//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';
import {width} from '../../utils/constants';

const Discount: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="cube-sharp" color={Colors.PRIMARY} size={18} />
      <Text style={styles.text}>2. Ürün İndirim</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE3E3',
    width: width * 0.12,
    margin: 5,
    paddingVertical: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 8,
    marginTop: 5,
  },
});

//make this component available to the app
export default Discount;
