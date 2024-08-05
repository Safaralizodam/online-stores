import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout, Home, GetCategori, Products, About, Checkout, Contact, GetById, Korzina, MyAccount, Signup, Wishlist, Login } from './routes/routes';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Suspense fallback={<div>Loading Home...</div>}><Home /></Suspense> },
        { path: "/products", element: <Suspense fallback={<div>Loading Products...</div>}><Products /></Suspense> },
        { path: "/products/:id", element: <Suspense fallback={<div>Loading Product Details...</div>}><GetById /></Suspense> },
        { path: "/categori/:id", element: <Suspense fallback={<div>Loading Category Details...</div>}><GetCategori /></Suspense> },
        { path: "/about", element: <Suspense fallback={<div>Loading About...</div>}><About /></Suspense> },
        { path: "/checkout", element: <Suspense fallback={<div>Loading Checkout...</div>}><Checkout /></Suspense> },
        { path: "/contact", element: <Suspense fallback={<div>Loading Contact...</div>}><Contact /></Suspense> },
        { path: "/korzina", element: <Suspense fallback={<div>Loading Korzina...</div>}><Korzina /></Suspense> },
        { path: "/my-account", element: <Suspense fallback={<div>Loading My Account...</div>}><MyAccount /></Suspense> },
        { path: "/signup", element: <Suspense fallback={<div>Loading Signup...</div>}><Signup /></Suspense> },
        { path: "/wishlist", element: <Suspense fallback={<div>Loading Wishlist...</div>}><Wishlist /></Suspense> },
        { path: "/login", element: <Suspense fallback={<div>Loading Login...</div>}><Login /></Suspense> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
