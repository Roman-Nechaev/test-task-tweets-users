import { useSelector, useDispatch } from 'react-redux';

import { statusFilters } from '../../redux/filtersUsers/constants';
import { selectStatusFilter, selectUsersCount } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/filtersUsers/filtersSlice';

import { Container, FilterBtn } from './StatusFilter.styled';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const { Follow, Followings } = useSelector(selectUsersCount);

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
        disabled={!Follow}
        onClick={() => handleFilterChange(statusFilters.follow)}
      >
        <span>Follow: {Follow}</span>
      </FilterBtn>

      <FilterBtn
        selected={filter === statusFilters.followings}
        type="button"
        disabled={!Followings}
        onClick={() => handleFilterChange(statusFilters.followings)}
      >
        <span>Followings: {Followings}</span>
      </FilterBtn>
    </Container>
  );
};
