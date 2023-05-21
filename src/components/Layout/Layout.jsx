import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from '../AppBar/AppBar';

import { Background } from './Layout.styled';

const Layout = () => {
  return (
    <Background>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </Background>
  );
};

export default Layout;
