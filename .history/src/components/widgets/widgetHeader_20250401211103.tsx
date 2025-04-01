//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const WidgetHeader: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default WidgetHeader;
