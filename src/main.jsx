import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import { Home } from '@pages/Home.jsx'
import { Accounts } from '@components/Accounts/index.jsx'
import { LoginPage } from '@pages/LoginPage.jsx'
import { PainelPage } from '@pages/Painel.jsx'

import { NotificationProvider } from '@context/NotificationContext.jsx'
import { PrivateRoute } from './routes/privateRoutes'
import { AuthProvider } from '@context/AuthContext.jsx'
import { ErrorPage } from '@pages/Error.jsx'
import { AccountRegisterPage } from '@pages/AccountRegisterPage'
import { AccountUpdatePage } from '@pages/AccountUpdatePage'
import { DetailsPages } from '@pages/DetailsPage.jsx'
import { AccountsPage } from './pages/AccountsPage.jsx'

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
    ],
  },
  {
    path: 'accounts',
    element: <AccountsPage />,
  },
  {
    path: 'accounts/details/:numericId',
    element: <DetailsPages />,
  },
  {
    path: 'painel',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <PainelPage />
      </PrivateRoute>
    ),
  },
  {
    path: 'login',
    errorElement: <ErrorPage />,
    element: <LoginPage />,
  },
  {
    path: 'accounts/updateaccount/:numericId',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <AccountUpdatePage />
      </PrivateRoute>
    ),
  },
  {
    path: 'addaccount',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <AccountRegisterPage />
      </PrivateRoute>
    ),
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
