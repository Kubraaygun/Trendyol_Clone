//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widgetHeaderProps} from '../../models/ui/widgetProps';

// create a component
const WidgetHeader: React.FC<widgetHeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

//make this component available to the app
export default WidgetHeader;
