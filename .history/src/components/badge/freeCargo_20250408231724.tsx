//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';

  return (
    <View style={styles.container}>
    <Icon
    name='cube-sharp'
    color={Colors.GRAY}
    size={20}
    />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default FreeCargo;
