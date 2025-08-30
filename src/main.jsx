import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { RouterProvider } from "react-router/dom";
import router from './router/router.jsx';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Layout></Layout>

      </RouterProvider>
    </AuthProvider>
    <Toaster position="top-right"
      reverseOrder={false}></Toaster>
  </StrictMode>,
)
