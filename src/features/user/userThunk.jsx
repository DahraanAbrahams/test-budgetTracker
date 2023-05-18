// import customFetch from '../../utils/axios';
import axios from "axios";
import { clearAllJobsState } from '../allTransactions/allTransactionsSlice';
import { clearValues } from '../transaction/transactionSlice';
import { checkForUnauthorizedResponse } from "../../utils/axios";
import { logoutUser } from "../user/userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await axios.post(url, user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await axios.post(url, user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await axios.patch(url, user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    thunkAPI.dispatch(clearAllJobsState());
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};