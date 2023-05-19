import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6464004a043c103502b0986a.mockapi.io/users/';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addQuantityFollow = createAsyncThunk(
  'users/addQuantityFallow',
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${user.id}`, {
        followers: user.followers + 1,
        follow: !user.follow,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFollowQuantity = createAsyncThunk(
  'users/removeFallow',
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${user.id}`, {
        followers: user.followers - 1,
        follow: !user.follow,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
