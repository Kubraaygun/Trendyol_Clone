//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {defaultScreenStyles} from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {height} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import {Formik} from 'formik';
import {LoginForm} from '../../models/ui/loginForm';
import {useDispatch} from 'react-redux';
import {userLogin} from '../../store/actions/authActions';
import {AppDispatch} from '../../store';
// create a component
const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const initialValues: LoginForm = {
    username: 'johnd',
    password: 'pass123',
  };
  return (
    <SafeAreaView style={defaultScreenStyles.safeAreaContainer}>
      <ScrollView>
        <Formik
          initialValues={initialValues}
          onSubmit={values => dispatch(userLogin(values))}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={defaultScreenStyles.container}>
              <Input
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                title="Kullanıcı Adı"
              />
              <Input
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry
                value={values.password}
                title="Şifre"
              />
              <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
              <View style={{marginTop: height * 0.05}}>
                <Button onPress={handleSubmit} title="Giriş Yap" />
              </View>
            </View>
          )}
        </Formik>
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
