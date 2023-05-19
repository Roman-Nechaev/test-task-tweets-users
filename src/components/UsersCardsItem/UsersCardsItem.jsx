import logo from '../../assets/img/Logo.png';
import bg from '../../assets/img/bg.png';
import ellipse from '../../assets/img/avatar-ellipse.png';

import PropTypes from 'prop-types';

import { quantityFollowers } from '../../utils/quantityFollowers';

import { useDispatch } from 'react-redux';

import {
  addQuantityFollow,
  removeFollowQuantity,
} from '../../redux/users/operations';
import { checkAvatar } from '../../utils/checkAvatar';
import {
  CardsItem,
  DecorLine,
  Logo,
  BackgroundImg,
  Tweets,
  Followers,
  Button,
  AvatarEllipse,
  AvatarUrl,
} from './UsersCardsItem.styled';

export const UsersCardsItem = user => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    !user.follow
      ? dispatch(addQuantityFollow(user))
      : dispatch(removeFollowQuantity(user));
  };

  const { followers, avatar, tweets } = user;

  return (
    <CardsItem>
      <Logo src={logo} alt="logo" />
      <BackgroundImg src={bg} alt="bg" />
      <DecorLine></DecorLine>
      <AvatarEllipse ellipse={ellipse}>
        <AvatarUrl src={checkAvatar(avatar)} />
      </AvatarEllipse>
      <Tweets>
        <span>{tweets}</span> tweets
      </Tweets>
      <Followers>
        <span>{quantityFollowers(followers)}</span> Followers
      </Followers>

      <Button onClick={handleToggle} flag={user.follow} type="button">
        {user.follow ? 'Following' : 'Follow'}
      </Button>
    </CardsItem>
  );
};

UsersCardsItem.propTypes = {
  user: PropTypes.string.isRequired,
};
