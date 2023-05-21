import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';

import { Home } from './pages/homePage/Home';
import { Tweets } from './pages/tweetsPages/tweets';
import './App.css';

function App() {
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
