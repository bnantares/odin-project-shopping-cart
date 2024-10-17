import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Root from './routes/Root';
import ContactUs from './routes/ContactUs';
import Shop from './routes/Shop';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import ErrorPage from "./ErrorPage";
import Index from './routes/Index';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route
        path='/'
        element={<Root/>}
        errorElement={<ErrorPage />}
      > 
        <Route index element={<Index />} />
        <Route 
          path='contact-us'
          element={<ContactUs />}
          errorElement={<ErrorPage />}
        />
        <Route
          path='shop'
          element={<Shop />}
          errorElement={<ErrorPage />}
        />
      </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
)
