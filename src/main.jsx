import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import { Home } from '@pages/Home.jsx'
import { Accounts } from '@components/Accounts/index.jsx'
import { DetailsPage } from '@components/Accounts/Details/index.jsx'
import { LoginPage } from '@pages/LoginPage.jsx'
import { PainelPage } from '@pages/Painel.jsx'

import { NotificationProvider } from '@context/NotificationContext.jsx'
import { PrivateRoute } from './routes/privateRoutes'
import { AuthProvider } from '@context/AuthContext.jsx'
import { ErrorPage } from '@pages/Error.jsx'
import { AccountRegister } from '@components/Painel/AccountRegister/index.jsx'
import { AccountUpdate } from '@components/Painel/AccountUpdate/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: 'addaccount',
        element: (
          <PrivateRoute>
            <AccountRegister />
          </PrivateRoute>
        ),
      },
      {
        path: 'accounts/updateaccount/:numericId',
        element: (
          <PrivateRoute>
            <AccountUpdate />
          </PrivateRoute>
        ),
      },
      {
        path: 'accounts/details/:numericId',
        element: <DetailsPage />,
      },
    ],
  },
  {
    path: 'painel',
    element: (
      <PrivateRoute>
        <PainelPage />
      </PrivateRoute>
    ),
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </NotificationProvider>
  </React.StrictMode>,
)
