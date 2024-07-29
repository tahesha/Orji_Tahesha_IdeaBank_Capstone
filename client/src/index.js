import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello world!</h1>
  </React.StrictMode>
);

