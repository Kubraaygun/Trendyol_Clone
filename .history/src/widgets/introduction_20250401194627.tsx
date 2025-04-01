//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Introduction: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>Introduction</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Introduction;
