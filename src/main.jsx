import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import { Home } from './pages/Home.jsx'
import { Accounts } from './components/Accounts/index.jsx'
import { DetailsPage } from './components/Accounts/Details/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'accounts',
        element: <Accounts />,
      },
      {
        path: 'accounts/details/:id',
        element: <DetailsPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
