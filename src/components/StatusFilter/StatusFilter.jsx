import { useSelector, useDispatch } from 'react-redux';

import { statusFilters } from '../../redux/filtersUsers/constants';
import { selectStatusFilter, selectUsersCount } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/filtersUsers/filtersSlice';

import { Container, FilterBtn } from './StatusFilter.styled';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const { follow, followings } = useSelector(selectUsersCount);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <Container flag={filter === 'all'}>
      <FilterBtn
        selected={filter === statusFilters.all}
        type="button"
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        <span>All</span>
      </FilterBtn>
      <FilterBtn
        selected={filter === statusFilters.follow}
        type="button"
        disabled={!follow}
        onClick={() => handleFilterChange(statusFilters.follow)}
      >
        <span>Follow: {follow}</span>
      </FilterBtn>

      <FilterBtn
        selected={filter === statusFilters.followings}
        type="button"
        disabled={!followings}
        onClick={() => handleFilterChange(statusFilters.followings)}
      >
        <span>Followings: {followings}</span>
      </FilterBtn>
    </Container>
  );
};
