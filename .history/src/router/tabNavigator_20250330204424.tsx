//import liraries
import React, {Component} from 'react';

// create a component
const TabNavigator: React.FC<Props> = ({navigation, route} = () => {
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
  );
});

//make this component available to the app
export default TabNavigator;
