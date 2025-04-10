//import liraries
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants';

// create a component
const Button: React.FC<Props> = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>Sepete Ekle</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    minHeight: height * 0.05,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    color: Colors.WHITE,
  },
});

//make this component available to the app
export default Button;
