import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth'

const PrivateRoute = ({ element: Element, ...rest }) => {
  return (
    <Route
    
      {...rest}
      element={
        isAuthenticated() ? (
          <Element />
        ) : (
          <Navigate to={{ pathname: '/Login', state: { from: rest.location } }} replace />
        )
      }
    />
  );
};

export default PrivateRoute;
