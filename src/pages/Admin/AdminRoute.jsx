import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.signIn);

  if (!userInfo) {
    // User is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  if (userInfo.role !== 1) {
    // User is not an admin, redirect to the homepage
    return <Navigate to="/" />;
  }

  // User is logged in and has the admin role, allow access to the protected route
  return children;
};

export default AdminRoute;
