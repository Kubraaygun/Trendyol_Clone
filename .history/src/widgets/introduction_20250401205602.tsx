//import liraries
import React from 'react';
import {Image, StyleSheet, Pressable} from 'react-native';

const Introduction: React.FC = ({navigation, route}) => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={require('../assets/images/ramazan.jpg')}
        style={{width: 200, height: 100, resizeMode: 'contain'}}
      />
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Introduction;
