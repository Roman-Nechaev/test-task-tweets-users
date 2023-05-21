import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { UsersCards } from '../../components/UsersCards/UsersCardsList';
import { selectError } from '../../redux/selectors';

import { AiOutlineArrowLeftSt, BackLink, TitleError } from './Tweets.styled';

export const Tweets = () => {
  const error = useSelector(selectError);

  const location = useLocation();
  const beckLinkLocationRef = useRef(location.state?.from ?? '/');
  return (
    <>
      <BackLink to={beckLinkLocationRef.current}>
        <AiOutlineArrowLeftSt />
        <span>Go back</span>
      </BackLink>
      {!error ? (
        <UsersCards />
      ) : (
        <TitleError>
          Something went wrong, try reloading the page or try again later.
        </TitleError>
      )}
    </>
  );
};
