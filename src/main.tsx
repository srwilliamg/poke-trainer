import './index.css';

import { Container, createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';

import Home from './app/home/home';
import Root from './app/root/root';
import StoreTrainerProvider from './provider/trainer';
import { StrictMode } from 'react';

if (import.meta.env.DEV) {
  console.log('Environment:', import.meta.env);
}

// export const API_URL =
//   process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <StrictMode>
        <StoreTrainerProvider>
          <Root />
        </StoreTrainerProvider>
      </StrictMode>
    ),
  },
  {
    path: '/home',
    element: (
      <StoreTrainerProvider>
        <Home></Home>
      </StoreTrainerProvider>
    ),
  },
]);

const root: Container = document.getElementById('root') as Container;

createRoot(root).render(<RouterProvider router={router} />);
