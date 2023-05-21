import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './filtersUsers/constants';

export const selectUsers = state => state.users.items;
export const selectLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;
export const selectStatusFilter = state => state.filters.status;

export const selectVisibleUsers = createSelector(
  [selectUsers, selectStatusFilter],
  (users, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.follow:
        return users.filter(user => !user.follower);
      case statusFilters.followings:
        return users.filter(user => user.follower);
      default:
        return users;
    }
  }
);

export const selectUsersCount = createSelector([selectUsers], users => {
  return users.reduce(
    (count, user) => {
      if (user.follower) {
        count.followings += 1;
      } else {
        count.follow += 1;
      }
      return count;
    },
    { follow: 0, followings: 0 }
  );
});
