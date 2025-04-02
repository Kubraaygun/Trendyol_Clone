//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteType} from '../routes/RouteType';

type Props = RouteType<'Rate'>;
// create a component
const Rate: React.FC<Props> = ({rating}) => {
  const fullStar = Math.floor(rating.rate);
  const halfStar = rating.rate % 1 >= 0.5;
  const halfStar = rating.rate % 1 >= 0.5;
  console.log(halfStar);
  return (
    <View style={styles.container}>
      <Text style={styles.rate}>{rating.rate}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  rate: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default Rate;
