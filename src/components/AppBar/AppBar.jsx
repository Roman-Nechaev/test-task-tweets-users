import { useLocation } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { FilterBar } from '../FilterBar/FilterBar';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const location = useLocation();

  const isCheckLocation = location.pathname === '/tweets';
  return (
    <Header>
      <Navigation />
      {isCheckLocation && <FilterBar />}
    </Header>
  );
};
