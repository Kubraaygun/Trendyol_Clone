//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {height} from '../../utils/constants';
import {Colors} from '../../theme/colors';

// create a component
const Login: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyles.safeAreaContainer}>
      <ScrollView>
        <View style={defaultScreenStyles.container}>
          <Input title="Eposta" />
          <Input title="Şifre" />
          <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
          <View style={{marginTop: height * 0.08}}>
            <Button title="Giriş Yap" />
          </View>
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
  forgotPassword: {
    textAlign: 'right',
    marginTop: 10,
    color: Colors.PRIMARY,
  },
});

//make this component available to the app
export default Login;
