import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createTransactionThunk, deleteTransactionThunk, editTransactionThunk } from "./transactionThunk";

const initialState = {
  isLoading: false,
  isEditing: false,
  editTransactionId: "",
  description: "",
  typeOptions: ["credit", "debit", "savings", "investment"],
  type: "debit",
  amount: 0,
};

export const createTransaction = createAsyncThunk(
  'transaction/createTransaction',
  createTransactionThunk
);

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  deleteTransactionThunk
);

export const editTransaction = createAsyncThunk(
  'transaction/editTransaction',
  editTransactionThunk
);

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
    setEditTransaction: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTransaction.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('Transaction Created');
      })
      .addCase(createTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTransaction.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('Transaction Modified...');
      })
      .addCase(editTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { handleChange, clearValues, setEditTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
