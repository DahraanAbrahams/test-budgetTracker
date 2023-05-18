import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllTransactionsThunk } from "./allTransactionsThunk";

const initialFiltersState = {
  search: "",
  type: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  isLoading: false,
  transactions: [],
  totalTransactions: 0,
  numOfPages: 1,
  page: 1,
  ...initialFiltersState,
};

export const getAllTransactions = createAsyncThunk(
  "allTransactions/getTransactions",
  getAllTransactionsThunk
);

const allTransactionsSlice = createSlice({
  name: "allTransactions",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
          state.page = 1;
          state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    clearAllJobsState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTransactions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.transactions = payload.transactions;
        state.numOfPages = payload.numOfPages;
        state.totalTransactions = payload.totalTransactions;
      })
      .addCase(getAllTransactions.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
  clearAllJobsState
} = allTransactionsSlice.actions;
export default allTransactionsSlice.reducer;
