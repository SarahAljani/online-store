import { createSlice } from "@reduxjs/toolkit";
import users from "../../data/users.jsx"; // Import the fake users array

const initialState = {
  user: {
    role: "guest",
  }, // Store the logged-in user
  isLoggedIn: false, // Track login status
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;

      // Find the user in the fake data
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        state.user = foundUser;
        state.isLoggedIn = true;
      } else {
        alert("Invalid email or password"); // Notify the user if invalid credentials
      }
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
