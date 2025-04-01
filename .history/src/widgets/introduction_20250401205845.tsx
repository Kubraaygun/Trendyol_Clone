//import liraries
import React from 'react';
import {Image, StyleSheet, Pressable} from 'react-native';
import {width} from '../utils/constants';

const Introduction: React.FC = () => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={require('../assets/images/ramazan.jpg')}
        style={{width: width * 0.8, height: 100, resizeMode: 'contain'}}
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
