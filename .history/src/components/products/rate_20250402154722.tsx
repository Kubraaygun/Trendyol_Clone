//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteType} from '../routes/RouteType';

type Props = RouteType<'Rate'>;
// create a component
const Rate: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Rate</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Rate;
