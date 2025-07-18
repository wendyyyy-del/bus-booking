// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login as loginApi, register as registerApi } from "../../api";

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginApi(credentials);
      // Assume response contains user and token
      if (!response.success) {
        return rejectWithValue(response.message);
      }
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Async thunk for register (optional)
export const register = createAsyncThunk(
  "auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await registerApi(formData);
      if (!response.success) {
        return rejectWithValue(response.message);
      }
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      // Optionally clear localStorage here if you store token there
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    loadUserFromStorage(state) {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      if (token && user) {
        state.token = token;
        state.user = user;
        state.isAuthenticated = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Login pending
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Login fulfilled
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        // Save to localStorage for persistence
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      // Login rejected
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      // Register pending
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Register fulfilled
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        // After register you might want to redirect user, so no user/token saved here
      })
      // Register rejected
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Registration failed";
      });
  },
});

export const { logout, loadUserFromStorage } = authSlice.actions;

export default authSlice.reducer;
