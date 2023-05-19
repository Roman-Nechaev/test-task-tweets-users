import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  fetchUsers,
  addQuantityFollow,
  removeFollowQuantity,
} from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const extraActions = [fetchUsers, addQuantityFollow, removeFollowQuantity];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addQuantityFollow.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.items.findIndex(
          user => user.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(removeFollowQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.items.findIndex(
          user => user.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })

      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer),
});

export const usersReducer = usersSlice.reducer;
