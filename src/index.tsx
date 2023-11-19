import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from './router/router';
import "./assets/scss/style.scss"
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import '../node_modules/flowbite/dist/flowbite.min.js'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);