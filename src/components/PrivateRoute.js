import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element: Element, isAuthenticated, ...rest }) {
    return isAuthenticated ? (
        <Route {...rest} element={<Element />} />
    ) : (
        <Navigate to="/login" replace />
    );
}

export default PrivateRoute;