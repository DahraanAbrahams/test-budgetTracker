// import customFetch from '../../utils/axios';
import axios from "axios";
import { checkForUnauthorizedResponse } from "../../utils/axios";

export const getAllTransactionsThunk = async (_, thunkAPI) => {
    const { search, type, sort, page } = thunkAPI.getState().allTransactions;
    let url = `/api/v1/transactions/showAllMyTransactions?transactionType=${type}&sort=${sort}&page=${page}`;
    if (search) { 
      url = url + `&search=${search}`
    }
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);   
   }
  }