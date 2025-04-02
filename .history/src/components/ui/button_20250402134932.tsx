//import liraries
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';

// create a component
const Button: React.FC<Props> = () => {
  return (
    <TouchableOpacity style={styles.container}>
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
  },
  title: {
    fontSize: 18,
    color: Colors.WHITE,
  },
});

//make this component available to the app
export default Button;
