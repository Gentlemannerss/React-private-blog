import React from 'react';
import {  Navigate } from 'react-router-dom';

function PrivateRoute({ isAuthenticated,children }) {
    if (isAuthenticated) {
        return children
    } else {
        return <Navigate to="/login" replace />
    }
    /*return isAuthenticated ? (
        <Route {...rest} element={<Element />} />
    ) : (
        <Navigate to="/login" replace />
    );*/
}

export default PrivateRoute;