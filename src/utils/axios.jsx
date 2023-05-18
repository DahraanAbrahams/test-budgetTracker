import axios from 'axios'

const customFetch = axios.create({
    baseURL: 'http://localhost:5050/api/v1'
})

import { clearStore } from '../features/user/userSlice';

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default customFetch;