import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { StatefulInput } from 'baseui/input';

import Root from './routes/root'
import ErrorPage from './error-page'
import Home from './routes/Home';
import Seating from './routes/Seating';
import Events from './routes/Events';
import About from './routes/About';

const engine = new Styletron();

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home/",
        element: <Home />,
      },
      {
        path: "seating/",
        element: <Seating />,
      },
      {
        path: "events/",
        element: <Events />,
      },
      {
        path: "about/",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StyletronProvider value={engine}>
  <BaseProvider theme={LightTheme}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </BaseProvider>
  </StyletronProvider> 
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
