import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(
    (state) => state.auth.isAuthenticated
  );

  if (!isLoggedIn) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
