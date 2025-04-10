//import liraries
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants';
import {ButtonProps} from '../../models/ui/buttonProps';

// create a component
const Button: React.FC<ButtonProps> = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
