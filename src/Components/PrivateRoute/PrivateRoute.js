import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth'

function PrivateRoute ({ children }) {
  
  const authenticated = isAuthenticated();
  return authenticated ? children : 
  <Navigate to='/Login'/>
        

};
export default PrivateRoute
