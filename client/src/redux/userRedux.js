import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,   //initially the user is not logged in
    isFetching: false,  //initially the user is not fetching
    error: false,       //initially there is no error
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;       //when the user starts loggin in set the isFetching to true
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;      //when the user successfully loggin in set the isFetching to false
      state.currentUser = action.payload;//set the currentUser to the user that logged in
    },
    loginFailure: (state) => {
      state.isFetching = false; //when the user fails to loggin in set the isFetching to false
      state.error = true;   //when the user fails to loggin in set the error to true
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
