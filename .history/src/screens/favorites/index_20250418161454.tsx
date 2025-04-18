import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';

const Favorites: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView style={defaultScreenStyles.safeAreaContainer}>
      <Text>Favorites</Text>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Favorites;
