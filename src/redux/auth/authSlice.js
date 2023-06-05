import { createSlice } from "@reduxjs/toolkit";
import { register, signIn, logOut, getCurrentUser } from "./operations";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    user: { name: null, email: null },
    isLoggedIn: false,
    token: null,
    isRefreshing: false,
}

const handlesignInAndRegister = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: handlesignInAndRegister,
    [signIn.fulfilled]: handlesignInAndRegister,
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [getCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});


// PERSIST
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

export const persistedReducer = persistReducer(authPersistConfig, authSlice.reducer);