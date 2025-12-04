import { RouterProvider, createRouter } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/variables.css';
import './styles/global.css';

import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
