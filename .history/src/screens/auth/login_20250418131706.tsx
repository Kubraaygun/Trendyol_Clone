//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';

// create a component
const Login: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Input title="Eposta" />
          <Input title="Şifre" />
          <Button title="Giriş Yap" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Login;
