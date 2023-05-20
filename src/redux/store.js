import { configureStore } from '@reduxjs/toolkit';

import { usersReducer } from './users/slice';
import { filtersReducer } from './filtersUsers/filtersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filters: filtersReducer,
  },
});
