import { useLocation } from 'react-router-dom';
import { UsersCards } from '../../components/UsersCards/UsersCardsList';
import { AiOutlineArrowLeftSt, BackLink } from './Tweets.styled';
import { useRef } from 'react';

export const Tweets = () => {
  const location = useLocation();
  const beckLinkLocationRef = useRef(location.state?.from ?? '/');
  return (
    <>
      <BackLink to={beckLinkLocationRef.current}>
        <AiOutlineArrowLeftSt />
        <span>Go back</span>
      </BackLink>
      <UsersCards />
    </>
  );
};
