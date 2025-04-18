import React, {Component} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const Favorites: React.FC = ({navigation, route}) => {
  const {} = useSelector((state: RootState) => state.favorites);
  return (
    <SafeAreaView style={defaultScreenStyles.safeAreaContainer}>
      <View style={defaultScreenStyles.container}>
        <FlatList data={} />
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Favorites;
