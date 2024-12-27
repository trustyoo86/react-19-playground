import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css'
import RootPage from './pages/Root.tsx';
import ShoppingCart from './pages/ShoppingCart.tsx';
import FormState from './pages/FormState.tsx';
import BatchingExample from './pages/BatchingExample.tsx';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />
  },
  {
    path: '/shoppingcart',
    element: <ShoppingCart />
  },
  {
    path: '/formstate',
    element: <FormState />
  },
  {
    path: '/batching',
    element: <BatchingExample />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
