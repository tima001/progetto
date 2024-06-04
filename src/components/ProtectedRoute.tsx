import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import storage from '../utils/storageService'

const ProtectedRoute = () => {
    // if (!storage?.get('token')) {
    //     return <Navigate to="/" />
    // }

    return <Outlet />
}

export default ProtectedRoute
