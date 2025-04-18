import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';

const Favorites: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView style={defaultScreenStyles.safeAreaContainer}>
      <View></View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Favorites;
