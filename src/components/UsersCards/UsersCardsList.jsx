import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Cards, WrapperCards } from './UsersCardsList.styled';
import { fetchUsers } from '../../redux/users/operations';
import debounce from 'lodash.debounce';
import { UsersCardsItem } from '../UsersCardsItem/UsersCardsItem';
import { selectUsers } from '../../redux/users/selectors';

export const UsersCards = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <WrapperCards>
        <Cards>
          {users.map(user => (
            <UsersCardsItem key={user.id} {...user} />
          ))}
        </Cards>
      </WrapperCards>
    </>
  );
};

// useEffect(() => {
//   dispatch(fetchUsers());
// }, [dispatch]);
