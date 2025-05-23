//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteType} from '../routes/RouteType';

type Props = RouteType<'introduction'>;

const Introduction: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images')} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Introduction;
