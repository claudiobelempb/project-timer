import React from 'react';

import { Outlet, useRoutes } from 'react-router-dom';
import { LayoutHome } from '../layouts/LayoutHome';

import NotFoundPage from '../pages/404';
import HistoryPage from '../pages/History';
import HomePage from '../pages/Home';

const AppUseRoutes: React.FC = () => {
  return useRoutes([
    { path: '/', element: <HomePage /> },
    {
      path: '/history',
      element: <HistoryPage />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);
};

export { AppUseRoutes };
