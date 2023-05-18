import { getAllTransactions, hideLoading, showLoading } from "../allTransactions/allTransactionsSlice";
// import customFetch from '../../utils/axios';
import axios from "axios";
import { clearValues } from "./transactionSlice";
import { checkForUnauthorizedResponse } from "../../utils/axios";

export const createTransactionThunk = async (transaction, thunkAPI) => {
    try {
      const response = await axios.post('/api/v1/transactions', transaction);
      thunkAPI.dispatch(clearValues());
      return response.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
};
  
export const deleteTransactionThunk = async (transactionId, thunkAPI) => {
    thunkAPI.dispatch(showLoading());
    try {
      const response = await axios.delete(`/api/v1/transactions/${transactionId}`);
      thunkAPI.dispatch(getAllTransactions());
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(hideLoading());
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
};
  
export const editTransactionThunk = async ({ transactionId, transaction }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/v1/transactions/${transactionId}`, transaction);
      thunkAPI.dispatch(clearValues());
      return response.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  };