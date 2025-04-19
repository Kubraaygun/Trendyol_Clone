import {createAsyncThunk} from '@reduxjs/toolkit';
import {postRequest} from '../../service/verbs';
import {AUTH_URLS} from '../../service/urls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userLogin = createAsyncThunk('auth/userLogin', async (params: object) => {
  try {
    const response = await postRequest(params, AUTH_URLS.LOGIN);

    if (response.data && response.data.token) {
      await AsyncStorage.setItem('token', response.data.token);
      const testValue = await AsyncStorage.getItem('testKey');
      console.log('Test Value:', testValue);
    }

    return response.data;
  } catch (error) {
    return error;
  }
});

export {userLogin};
