//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {RouteType} from '../routes/RouteType';

type Props = RouteType<'Login'>;
// create a component
const Login: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Login;
