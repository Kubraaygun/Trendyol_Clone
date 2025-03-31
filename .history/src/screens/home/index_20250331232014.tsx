//import liraries
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import type {RootState} from '../../store/index';
import {getAllCategories} from '../../store/actions/categoriesAction';

const Stack = createNativeStackNavigator();
// create a component
const Home: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Home;
