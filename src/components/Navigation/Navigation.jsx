import { LinkNav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <LinkNav to="/">Home</LinkNav>
      <LinkNav to="/tweets">Tweets</LinkNav>
    </nav>
  );
};
