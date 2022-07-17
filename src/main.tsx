import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/Home';
import { AppRoutes } from './routes';
// import './styles/antd.dark-theme.css';
import './styles/theme/default-theme.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <AppRoutes />
    </>
  </React.StrictMode>
);
