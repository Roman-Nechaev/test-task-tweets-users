import { useEffect } from 'react';
import './App.css';
import { UsersCards } from './components/UsersCards/UsersCardsList';
import { fetchUsers } from './redux/users/operations';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      <UsersCards />
    </>
  );
}

export default App;
