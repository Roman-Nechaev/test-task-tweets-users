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
  console.log(filter);
  return (
    <Container flag={filter === 'all'}>
      <FilterBtn
        selected={filter === statusFilters.all}
        type="button"
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </FilterBtn>
      <FilterBtn
        selected={filter === statusFilters.follow}
        type="button"
        onClick={() => handleFilterChange(statusFilters.follow)}
      >
        Follow: <span> {Follow}</span>
      </FilterBtn>
      <FilterBtn
        selected={filter === statusFilters.followings}
        type="button"
        onClick={() => handleFilterChange(statusFilters.followings)}
      >
        Followings: <span>{Followings}</span>
      </FilterBtn>
    </Container>
  );
};
