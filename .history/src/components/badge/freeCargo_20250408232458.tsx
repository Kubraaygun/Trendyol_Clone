//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';

const FreeCargo: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Icon name="cube-sharp" color={Colors.GRAY} size={18} />
      <Text style={styles.text}> Kargo Bedava</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    width: '25%',
    paddingVertical: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 8,

    marginTop: 5,
  },
});

//make this component available to the app
export default FreeCargo;
