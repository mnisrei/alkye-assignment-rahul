import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppWrapper from './components/app-wrapper';
import ErrorBoundary from './components/error-boundry';
const LoginPage = lazy(() => import('./pages/auth/index'))
const Dashboard = lazy(() => import('./pages/dashboard'))
import { RouterProvider } from 'react-router-dom';
import ProtectedRoute from './components/private-routes';
import './App.css'

function App() {
  const publicRoute = [
    {
      path: "/",
      element: <LoginPage />,
      id: "home",
      errorElement: <ErrorBoundary />,
    }, {
      path: "/login",
      element: <LoginPage />,
      id: "login",
      errorElement: <ErrorBoundary />,
    }
  ]

  const privateRoute = [
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
      id: "dashboard",
      errorElement: <ErrorBoundary />,
    },
  ];
  const Root = () => {
    return <AppWrapper />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorBoundary />,
      children: [...publicRoute, ...privateRoute],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
