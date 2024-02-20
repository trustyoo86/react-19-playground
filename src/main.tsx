import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import RootPage from './pages/Root.tsx';
import ShoppingCart from './pages/ShoppingCart.tsx';
import FormState from './pages/FormState.tsx';

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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
