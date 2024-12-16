import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "getUsers",
  async ({ results, nat, gender }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://randomuser.me/api/?results=${results}&nat=${nat}&gender=${gender}`
      );
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    errorMsg: "",
    data: [],
    user: {
      name: "",
      age: "",
      location: {
        street: "",
      },
    },
  },
  reducers: {
    updateProfile: (state) => {
      state.user.name = "Swapnil Chaturevedi";
      state.user.location.street = "Billionare's Row";
    },
  },
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

export const { updateProfile } = usersSlice.actions;

export default usersSlice.reducer;
