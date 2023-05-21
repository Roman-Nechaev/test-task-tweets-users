import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { fetchUsers } from './redux/users/operations';

const Home = lazy(() => import('./pages/homePage/Home'));
const Layout = lazy(() => import('./components/Layout/Layout'));
const Tweets = lazy(() => import('./pages/tweetsPages/Tweets'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
    </Routes>
  );
}

export default App;
