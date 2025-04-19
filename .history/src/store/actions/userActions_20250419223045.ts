import {createAsyncThunk} from '@reduxjs/toolkit';
import {USER_URLS} from '../../service/urls';
import {getRequest} from '../../service/verbs';

const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (params: object) => {
    const userUrl = `${USER_URLS.USERS}/${params.id}`;
    const response = await getRequest(params, userUrl);
    console.log(response.data);

    return response.data;
  },
);
export {getUserInfo};
