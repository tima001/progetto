import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import ProtectedRoute from '../components/ProtectedRoute'
import ConfirmMail from '../components/registrationForm/components/ConfirmMail'
import StudentsPage from '../pages/admin/students/StudentsPage'

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/login"
                    element={<Login showLoginPage={true} />}
                />
                <Route
                    path="/sign-up"
                    element={<Login showLoginPage={false} />}
                />
                <Route
                    path="/api/auth/mail-activate/:token"
                    element={<ConfirmMail />}
                />

                <Route element={<ProtectedRoute />}>
                    <Route element={<MainLayout />}>
                        <Route path='/students'>
                            <Route index element={<StudentsPage />}/>
                        </Route>
                    </Route>
                </Route>

                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </>
    )
}

export default AppRouter
