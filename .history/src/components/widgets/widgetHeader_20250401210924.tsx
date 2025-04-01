//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const WidgetHeader: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>WidgetHeader</Text>
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
export default WidgetHeader;
