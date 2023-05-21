import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropagateLoader from 'react-spinners/PropagateLoader';

import { Navigation } from '../Navigation/Navigation';
import { FilterBar } from '../FilterBar/FilterBar';
import { selectLoading } from '../../redux/selectors';

import { Header } from './AppBar.styled';

export const AppBar = () => {
  const location = useLocation();
  const loading = useSelector(selectLoading);

  const isCheckLocation = location.pathname === '/tweets';
  return (
    <Header>
      <Navigation />
      {loading && <PropagateLoader color="#36d7b7" />}
      {isCheckLocation && <FilterBar />}
    </Header>
  );
};
