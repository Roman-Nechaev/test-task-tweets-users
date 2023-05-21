import { useState } from 'react';
import { useSelector } from 'react-redux';

import { UsersCardsItem } from '../UsersCardsItem/UsersCardsItem';
import { selectLoading, selectVisibleUsers } from '../../redux/selectors';

import { TitleError } from '../../pages/tweetsPages/Tweets.styled';

import {
  BtnLoadMore,
  Cards,
  ContainerBtn,
  WrapperCards,
} from './UsersCardsList.styled';

export const UsersCards = () => {
  const users = useSelector(selectVisibleUsers);
  const loading = useSelector(selectLoading);

  const [visible, setVisible] = useState(3);

  const checkUsersLength = () => {
    if (users.length === 0) {
      return (
        <TitleError>
          Im sorry, but you have no followers. Choose a different filter
          parameter
        </TitleError>
      );
    }
    if (users.length <= 3) return;
    return (
      <ContainerBtn>
        <BtnLoadMore
          type="button"
          disabled={loading}
          onClick={() => onClickPageUp()}
        >
          <span> Load More </span>
        </BtnLoadMore>
      </ContainerBtn>
    );
  };

  const onClickPageUp = () => {
    setVisible(visible => (visible += 3));
  };

  return (
    <>
      <WrapperCards>
        <Cards>
          {users.slice(0, visible).map(user => (
            <UsersCardsItem key={user.id} {...user} />
          ))}
        </Cards>
      </WrapperCards>
      {checkUsersLength()}
    </>
  );
};
