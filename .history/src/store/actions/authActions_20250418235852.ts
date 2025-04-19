import {createAsyncThunk} from '@reduxjs/toolkit';
import {postRequest} from '../../service/verbs';
import {AUTH_URLS} from '../../service/urls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userLogin = createAsyncThunk('auth/userLogin', async (params: object) => {
  try {
    const response = await postRequest(params, AUTH_URLS.LOGIN);
    console.log('response', response.data); // response'u logla

    if (response.data && response.data.token) {
      try {
        await AsyncStorage.setItem('token', response.data.token);
        console.log('Token saved successfully'); // Token başarıyla kaydedildiğinde logla
      } catch (asyncError) {
        console.error('Error saving token:', asyncError); // AsyncStorage hatası burada loglanır
      }
    } else {
      console.error('Token not found in response:', response.data); // Token bulunamazsa logla
    }

    return response.data;
  } catch (error) {
    console.error('Error in user login:', error); // Ana hatayı logla
    return error;
  }
});

export {userLogin};
