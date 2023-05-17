import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import avatar from '../../assets/img/Boy.png';
import logo from '../../assets/img/Logo.png';
import bg from '../../assets/img/bg.png';
import {
  Cards,
  WrapperCards,
  CardsItem,
  DecorLine,
  Logo,
  BackgroundImg,
  Avatar,
  Tweets,
  Followers,
  Button,
} from './UsersCards.styled';
import { fetchUsers } from '../../redux/users/operations';
import { selectUsers } from '../../redux/users/selectors';

export const UsersCards = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <WrapperCards>
      <Cards>
        <CardsItem>
          <Logo src={logo} alt="logo" />
          <BackgroundImg src={bg} alt="bg" />
          <DecorLine></DecorLine>
          <Avatar src={avatar} alt="avatar" />
          <Tweets>
            <span>777</span> tweets
          </Tweets>
          <Followers>
            <span>100,500</span> Followers
          </Followers>
          <Button type="button">Follow</Button>
        </CardsItem>
      </Cards>
    </WrapperCards>
  );
};
