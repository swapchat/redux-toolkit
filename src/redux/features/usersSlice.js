import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("getUsers", async () => {
  const { data } = await axios.get(
    "https://randomuser.me/api/?results=10&nat=in&gender=male"
  );
  return data.results;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    errorMsg: "",
    data: [],
  },
  //   reducers: {
  //     getUsersRequest(state) {
  //       state.isLoading = true;
  //       state.errorMsg = "";
  //     },
  //     getUsersSuccess(state, action) {
  //       state.isLoading = false;
  //       state.errorMsg = "";
  //       state.data = action.payload;
  //     },
  //     getUsersFailure(state) {
  //       state.isLoading = false;
  //       state.errorMsg = "Error occurred while fetching users. Please try again.";
  //       state.data = [];
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
      state.errorMsg = "";
    }),
      builder.addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMsg = "";
        state.data = action.payload;
      }),
      builder.addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
        state.errorMsg =
          "Error occurred while fetching users. Please try again.";
        state.data = [];
      });
  },
});

export const { getUsersRequest, getUsersFailure, getUsersSuccess } =
  usersSlice.actions;

export default usersSlice.reducer;
