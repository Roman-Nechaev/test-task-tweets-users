import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import {
  BtnBack,
  BtnLoadMore,
  Cards,
  ContainerBtn,
  WrapperCards,
} from './UsersCardsList.styled';

import { UsersCardsItem } from '../UsersCardsItem/UsersCardsItem';
import { selectUsers } from '../../redux/users/selectors';

export const UsersCards = () => {
  const users = useSelector(selectUsers);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const containerRef = useRef(null);

  const checkForScrollPosition = () => {
    const { current } = containerRef;

    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
    }
  };
  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

  const scrollContainerBy = distance =>
    containerRef.current?.scrollBy({ left: distance, behavior: 'smooth' });

  useEffect(() => {
    const { current } = containerRef;
    checkForScrollPosition();
    current?.addEventListener('scroll', debounceCheckForScrollPosition);

    return () => {
      current?.removeEventListener('scroll', debounceCheckForScrollPosition);
      debounceCheckForScrollPosition.cancel();
    };
  }, [debounceCheckForScrollPosition]);

  return (
    <>
      <WrapperCards>
        <Cards ref={containerRef}>
          {users.map(user => (
            <UsersCardsItem key={user.id} {...user} />
          ))}
        </Cards>
      </WrapperCards>
      <ContainerBtn>
        {canScrollLeft && (
          <BtnBack
            type="button"
            disabled={!canScrollLeft}
            onClick={() => scrollContainerBy(-1200)}
          >
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
            <span>Back</span>
          </BtnBack>
        )}
        <BtnLoadMore
          type="button"
          disabled={!canScrollRight}
          onClick={() => scrollContainerBy(1200)}
        >
          <span> {canScrollRight ? 'Load More' : 'No more'}</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </BtnLoadMore>
      </ContainerBtn>
    </>
  );
};
