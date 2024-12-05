import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@/apps/vcpx/meta/routes';

export const App = ({ mode, setMode }) => {
  const router = createHashRouter(routes(mode, setMode));

  return <RouterProvider router={router} />;
};
