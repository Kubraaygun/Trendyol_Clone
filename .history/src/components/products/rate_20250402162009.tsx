//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteType} from '../routes/RouteType';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';

type Props = RouteType<'Rate'>;
// create a component
const Rate: React.FC<Props> = ({rating}) => {
  const fullStar = Math.floor(rating.rate);
  const halfStar = rating.rate % 1 >= 0.5;
  const emptyStar = 5 - fullStar - (halfStar ? 1 : 0);
  console.log(emptyStar);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.rate}>{rating.rate}</Text>
        {Array(fullStar)
          .fill(null)
          .map((item, index) => (
            <Icon key={index} name="star" size={18} color={Colors.PRIMARY} />
          ))}
        {halfStar && <Icon name="star-half" size={18} color={Colors.PRIMARY} />}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default Rate;
