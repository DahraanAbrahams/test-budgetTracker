import { configureStore } from '@reduxjs/toolkit';
import transactionSlice from './features/transaction/transactionSlice';
import userSlice from './features/user/userSlice';
import allTransactionsSlice from './features/allTransactions/allTransactionsSlice'


export const store = configureStore({
  reducer: {
    user: userSlice,
    transaction: transactionSlice,
    allTransactions: allTransactionsSlice,
  },
});
